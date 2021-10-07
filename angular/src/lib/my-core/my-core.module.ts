import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { FormButtonsModule } from 'src/app/form-buttons';
import { ShowErrorsMessagesModule } from 'src/app/show-errors-messages';



@NgModule({
  declarations: [
    SizerComponent,
    PIPES_CADENAS,
    FormButtonsModule,
    ShowErrorsMessagesModule

  ],

  exports: [
    SizerComponent,
    PIPES_CADENAS,
    FormButtonsModule,
    ShowErrorsMessagesModule

  ],

  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
