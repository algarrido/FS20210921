import { Component, Injectable, OnInit } from '@angular/core';
import {
  NotificationService,
  NotificationType,
} from '../common-services/notification.service';
export interface Cliente {
  id: number | null;
  nombre: string;
  direccion: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
  activo: boolean;
  fecha: string;
}

@Injectable({ providedIn: 'root' }) //esto es un servicio
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    {
      id: 1,
      nombre: 'Pepito',
      apellidos: 'Grillo',
      correo: 'pepito@grillo',
      direccion: 'street',
      edad: 99,
      dni: '12345678N',
      activo: true,
      fecha: '30/05/21',
    },
  ];

  Elemento: Cliente = {
    id: null,
    nombre: '',
    apellidos: '',
    correo: null,
    direccion: '',
    edad: null,
    dni: null,
    activo: false,
    fecha: '',
  };

  isAdd = true;

  constructor(private notify: NotificationService) {}
  public list() {}

  public add() {
    this.Elemento = {
      id: null,
      nombre: '',
      apellidos: '',
      correo: null,
      direccion: '',
      edad: null,
      dni: null,
      activo: true,
      fecha: '',
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
      (this.isAdd ? 'Nuevos: ' : 'Modificados') + JSON.stringify(this.Elemento),
      NotificationType.info
    );
  }
}
@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {
  constructor(public cli: ClienteViewModel) {}

  errorObligatorio: string = 'Es obligatorio.';
  errorEmail: string = 'No es un correo electrónico valido.';
  errorTamano: string = 'Debe tener entre 2 y 10 carateres.';

  ngOnInit(): void {}
}
