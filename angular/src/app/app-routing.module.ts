import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent, } from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { LibrosAddComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './libros/componente.component';
import { HomeComponent, PageNotFoundComponent } from './main';
import { BlogAddComponent, BlogEditComponent,BlogListComponent,BlogViewComponent } from './blog/componente.component';

const routes: Routes = [
  { path :'', pathMatch: 'full', component:HomeComponent },
  { path :'inicio', component:HomeComponent },
  { path :'demos', component:DemosComponent },
  { path :'calculadora', component:CalculadoraComponent },

  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent },
  { path: 'contactos/:id/edit', component: ContactosEditComponent },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },

  { path: 'libros', component: LibrosListComponent },
  { path: 'libros/add', component: LibrosAddComponent },
  { path: 'libros/:id/edit', component: LibrosEditComponent },
  { path: 'libros/:id', component: LibrosViewComponent },
  { path: 'libros/:id/:kk', component: LibrosViewComponent },

  { path: 'blog', component: BlogListComponent },
  { path: 'blog/add', component: BlogAddComponent },
  { path: 'blog/:id/edit', component: BlogEditComponent },
  { path: 'blog/:id', component: BlogViewComponent },
  { path: 'blog/:id/:kk', component: BlogViewComponent },
/*

  { path :'libros', children:[
    { path :'', component:LibrosComponent },
    { path :'add', component:LibrosComponent},
    { path :':id/edit', component:LibrosComponent },
    { path :':id', component:LibrosComponent },
    { path :':id/:kk', component:LibrosComponent },

  ]},
*/
  //{ path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},

  { path :'404.html', component:PageNotFoundComponent },
  { path :'**', component:PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
