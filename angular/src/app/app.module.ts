import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AuthInterceptor, SecurityModule } from './security';
import { AjaxWaitInterceptor, MainModule } from './main';
import { CommonServicesModule } from './common-services/common-services.module';
import { environment } from 'src/environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ContactosModule } from './contactos/modulo.module';
import { CommonComponentModule } from './common-component';
import { LibrosModule } from './libros/modulo.module';
import { BlogModule } from './blog/modulo.module';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClienteFormularioComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCoreModule,
    SecurityModule,
    MainModule,
    ContactosModule,
    LibrosModule,
    BlogModule,
    CommonServicesModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentModule,
    AppRoutingModule,

  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
