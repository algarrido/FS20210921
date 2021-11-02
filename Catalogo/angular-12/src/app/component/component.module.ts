import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { PeliculasComponent } from './pelicula/peliculas.component';
import { ActoresComponent } from './actor/actor.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriasComponent } from './categoria/categoria.component';
import { IdiomaComponent } from './idioma/idioma.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
  ],
  declarations: [

    CategoriasComponent,
    IdiomaComponent,
    PeliculasComponent,
    ActoresComponent
  ]
})
export class ComponentsModule {}
