import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { ShowErrorsMessagesComponent } from 'src/app/show-errors-messages';
import { MIS_VALIDADORES } from './directives/validadores/validadores.directive';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { VALIDATORS_DATES } from './directives/validadores/dates.directive';
import { VALIDATORS_CROSS_INPUT } from './directives/validadores/cross-field.directive';
import { UnlessDirective } from './directives/estruturales.directive';
import { FormButtonsModule } from 'src/app/form-buttons';


@NgModule({
  declarations: [
    SizerComponent,
    PIPES_CADENAS,
    ShowErrorsMessagesComponent,
    MIS_VALIDADORES,
    FormButtonsModule,
    DIRECTIVAS_ATRIBUTO,
    MIS_VALIDADORES,
    VALIDATORS_DATES,
    VALIDATORS_CROSS_INPUT,
    UnlessDirective,
  ],

  exports: [
    SizerComponent,
    PIPES_CADENAS,
    ShowErrorsMessagesComponent,
    MIS_VALIDADORES,
    FormButtonsModule,
    DIRECTIVAS_ATRIBUTO,
    MIS_VALIDADORES,
    VALIDATORS_DATES,
    VALIDATORS_CROSS_INPUT,
    UnlessDirective,
  ],

  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
