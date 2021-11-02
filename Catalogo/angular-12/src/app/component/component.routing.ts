import { Routes } from '@angular/router';

import { IdiomaComponent } from './idioma/idioma.component';
import { PeliculasComponent } from './pelicula/peliculas.component';
import { ActoresAddComponent, ActoresComponent, ActoresEditComponent, ActoresViewComponent } from './actor/actor.component';
import { CategoriasComponent } from './categoria/categoria.component';
import { AuthGuard } from '../security';

export const ComponentsRoutes: Routes = [

  {
    path: '',


    children: [

      {
        path: 'categorias',
        component: CategoriasComponent,
        data: {
          title: 'Categorias',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Categorias' }
          ]
        }
      },
      {
        path: 'idioma',
        component: IdiomaComponent,
        data: {
          title: 'Idioma',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Idioma' }
          ]
        }
      },

      {
        path: 'peliculas',
        component: PeliculasComponent,
        data: {
          title: 'Peliculas',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Peliculas' }
          ]
        }
      },
	  {
        path: 'actor',
        component: ActoresComponent,
        data: {
          title: 'Actor',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'ngComponent' },
            { title: 'Actor' }
          ]
        }
      }
    ]
  },

  { path: 'actor/add', component: ActoresAddComponent },
  { path: 'actor/:id/edit', component: ActoresEditComponent },
  { path: 'actor/:id', component: ActoresViewComponent },

];
