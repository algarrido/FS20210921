import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTDAOService } from '../base-code/RESTDAOService';
import {
  NotificationService,
  NotificationType,
} from '../common-services/notification.service';

export interface Persona {
  id: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
}
@Injectable({ providedIn: 'root' })
export class PersonasDAO extends RESTDAOService<Persona, number> {
  constructor(http: HttpClient) {
    super(http, 'personas');
  }
}

@Injectable({ providedIn: 'root' }) //esto es un servicio
export class PersonasViewModel {
  Listado: Array<Persona> = [
    {
      id: 1,
      nombre: 'Pepito',
      apellidos: 'Grillo',
      correo: 'pepito@grillo',
      edad: 99,
      dni: '12345678N',
    },
  ];

  Elemento: Persona = {
    id: null,
    nombre: '',
    apellidos: '',
    correo: null,
    edad: null,
    dni: null,
  };

  isAdd = true;

  constructor(private notify: NotificationService, private http: HttpClient, private dao: PersonasDAO) {

  }
  public list() {}

  public add() {
    this.Elemento = {
      id: null,
      nombre: '',
      apellidos: '',
      correo: null,
      edad: null,
      dni: null,
    };
    this.isAdd = true;
  }
  public edit() {
    if (this.Elemento.id)
    this.dao.get(this.Elemento.id).subscribe(
      //    this.http.get<Persona>(`http://localhost:4321/api/personas/${this.Elemento.id}`).subscribe(
      data => {
        this.Elemento = data;
        this.isAdd = false;
      },
      err => this.notify.add(err.message)
    )
  }
  public view() {
    this.Elemento = this.Listado[0];
    this.isAdd = false;
  }
  public delete() {
    if(this.Elemento.id)
    this.dao.remove(this.Elemento.id).subscribe (
      data => this.notify.add('OK', NotificationType.info),
      err => this.notify.add(err.message)

    )

  }
  public cancel() {}

  public send() {
    let peticion: Observable<Persona> | undefined = undefined;
    if (this.isAdd)
      //peticion = this.http.post(`http://localhost:4321/api/personas`, this.Elemento)
      peticion = this.dao.add(this.Elemento)
    else if (this.Elemento.id)
      // peticion = this.http.put(`http://localhost:4321/api/personas/${this.Elemento.id}`, this.Elemento)
      peticion = this.dao.change(this.Elemento.id, this.Elemento)
    if (peticion)
      peticion.subscribe(
        data => this.notify.add('OK', NotificationType.info),
        err => this.notify.add(err.message)
      )
    // this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(public vm: PersonasViewModel) {}

  ngOnInit(): void {}

}
