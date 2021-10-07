import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
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

  constructor(private notify: NotificationService) {

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
    this.Elemento = this.Listado[0];
    this.isAdd = false;
  }
  public view() {
    this.Elemento = this.Listado[0];
    this.isAdd = false;
  }
  public delete() {}
  public cancel() {}

  public send() {
    this.notify.add(
      (this.isAdd ? 'Nuevos: ' : 'Modificados') + JSON.stringify(this.Elemento), NotificationType.info);
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
