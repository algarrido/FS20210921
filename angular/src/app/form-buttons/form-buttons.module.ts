import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'myButtons',
  template: `
  <div>
  <div class="btn-group" role="group">
  <button class="btn btn-primary" *ngIf="hasSend" (click)="send.emit(null)" [disabled]="sendDisabled"><i class="fas fa-check-circle"></i> enviar</button>
  <button class="btn btn-danger" *ngIf="hasDelete" (click)="delete.emit(null)"><i class="far fa-trash-alt"> borrar</i></button>
  <button class="btn btn-success" *ngIf="hasCancel" (click)="cancel.emit(null)"><i class="fas fa-undo-alt"></i> volver</button>
</div>

  </div>`,
})
export class FormButtonsModule {
  @Input('send-disabled') sendDisabled: boolean | null = false;
  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasSend(): boolean { return this.send.observers.length > 0; }
  get hasCancel(): boolean { return this.cancel.observers.length > 0; }
  get hasDelete(): boolean { return this.delete.observers.length > 0; }
 }
