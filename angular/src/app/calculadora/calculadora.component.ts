import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService, NotificationType } from '../common-services/notification.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  public currentTotal: number = 0;
  public buffer: string = '0';
  public previousOperator: string | null = null;

  constructor(private log:LoggerService,private notify: NotificationService) {}


  ngOnInit(): void {}

  public handleSymbol(value: string) {
    switch (value) {
      case 'C':

        //this.notify.add('Limpiado', NotificationType.warn);//prueba notificacion
        this.buffer = '0';
        this.currentTotal = 0;
        this.previousOperator = null;
        break;
      case '=':
        if (this.previousOperator === null) {
          return;
        }
        this.flushOperation(parseInt(this.buffer));
        this.buffer = '' + this.currentTotal;
        this.previousOperator = null;
        this.currentTotal = 0;
        break;
      case '←':
        if (this.buffer.length === 1) {
          this.buffer = '0';
        } else {
          this.buffer = this.buffer.substring(0, this.buffer.length - 1);
        }
        break;
      default:
        this.handleMath(value);
        break;
    }
    return value;
  }
  public handleNumber(value: string): void {
    if (this.buffer === '0') {
      this.buffer = value;
    } else {
      this.buffer += value;
    }
  }

  public putDecimal():void{
    if (this.buffer==='0') {
        this.buffer = '0.';
    } else {
        this.buffer += '.';
    }
  }

  public handleMath(value: string): void {
    const internalBuffer = parseInt(this.buffer);

    if (this.currentTotal === 0) {
      this.currentTotal = internalBuffer;
    } else {
      this.flushOperation(internalBuffer);
    }

    this.previousOperator = value;

    this.buffer = '0';
  }

  public suma(internalBuffer: number, currentTotal1: number) {
    this.currentTotal = currentTotal1;
    return (this.currentTotal += internalBuffer);
  }

  public resta(internalBuffer: number, currentTotal1: number) {
    this.currentTotal = currentTotal1;
    return (this.currentTotal -= internalBuffer);
  }

  public multiplica(internalBuffer: number, currentTotal1: number) {
    this.currentTotal = currentTotal1;
    return (this.currentTotal *= internalBuffer);
  }

  public divide(internalBuffer: number, currentTotal1: number) {
    this.currentTotal = currentTotal1;

    return (this.currentTotal /= internalBuffer);
  }

  public flushOperation(internalBuffer: number): void {
    if (this.previousOperator === '+') {
      this.suma(internalBuffer, this.currentTotal);
      this.log.info("");
    } else if (this.previousOperator === '-') {
      this.resta(internalBuffer, this.currentTotal);
    } else if (this.previousOperator === 'x') {
      this.multiplica(internalBuffer, this.currentTotal);
    } else {
      this.divide(internalBuffer, this.currentTotal);
    }
  }
}
