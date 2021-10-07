import { Component, Output } from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Component({
  selector: 'myButtons',
  template: `
  <div>

  <input type='button' value='send' (click)='ev.emit'>
  <input type='button' value='cancel' (click)='ev.emit'>

  </div>`,
})
export class FormButtonsModule {
  @Output() ev: EventEmitter<any> = new EventEmitter();

  constructor(){

  }

 }
