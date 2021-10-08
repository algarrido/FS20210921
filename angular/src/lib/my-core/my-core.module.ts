import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { FormButtonsModule } from 'src/app/form-buttons';
import { ShowErrorsMessagesComponent } from 'src/app/show-errors-messages';
import { MIS_VALIDADORES } from './directives/validadores.directive';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';



@NgModule({
  declarations: [
    SizerComponent,
    PIPES_CADENAS,
    FormButtonsModule,
    ShowErrorsMessagesComponent,
    MIS_VALIDADORES,
    DIRECTIVAS_ATRIBUTO

  ],

  exports: [
    SizerComponent,
    PIPES_CADENAS,
    FormButtonsModule,
    ShowErrorsMessagesComponent,
    MIS_VALIDADORES,DIRECTIVAS_ATRIBUTO
  ],

  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
