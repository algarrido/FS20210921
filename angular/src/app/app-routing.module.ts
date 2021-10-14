import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent, PageNotFoundComponent } from './main';

const routes: Routes = [
  { path :'', pathMatch: 'full', component:HomeComponent },
  { path :'inicio', component:HomeComponent },
  { path :'demos', component:DemosComponent },
  { path :'calculadora', component:CalculadoraComponent },

  { path: 'contactos', children: [
    { path: '', component: ContactosComponent},
    { path: 'add', component: ContactosComponent},
    { path: ':id/edit', component: ContactosComponent},
    { path: ':id', component: ContactosComponent},
    { path: ':id/:kk', component: ContactosComponent},
    ]},

 /* { path :'libros', children:[
    { path :'', component:ContactosComponent }, //aqui el libro
    { path :'add', component:ContactosComponent},
    { path :':id/edit', component:ContactosComponent },
    { path :':id', component:ContactosComponent },
    { path :':id/:kk', component:ContactosComponent },

  ]},
*/
  //{ path :'antonie/hasted', redirectTo:'/contactos/27' },

  { path :'404.html', component:PageNotFoundComponent },
  { path :'**', component:PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
