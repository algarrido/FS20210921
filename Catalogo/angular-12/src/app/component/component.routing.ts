import { Routes } from '@angular/router';

import { IdiomaComponent } from './idioma/idioma.component';
import { PeliculasComponent } from './pelicula/peliculas.component';
import { ActoresComponent, ActoresViewComponent } from './actor/actor.component';
import { CategoriasComponent } from './categoria/categoria.component';

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
  { path: 'actor/:id', component: ActoresViewComponent },
];
