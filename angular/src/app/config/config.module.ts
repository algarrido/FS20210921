import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion/configuracion.component';
import { DatosComponent } from './datos/datos/datos.component';
import { PermisosComponent } from './permisos/permisos/permisos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConfiguracionComponent,
    DatosComponent,
    PermisosComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([]),
  ]
})
export class ConfigModule { }
