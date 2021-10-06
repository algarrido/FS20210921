import { Component, OnInit } from '@angular/core';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
  providers: [LoggerService,{provide:ERROR_LEVEL,useValue:1},],
})
export class DemosComponent implements OnInit {
  private nombre:string= "mundo";
  listado = [
    {id: 1, nombre: "Madrid"},
    {id: 2, nombre: "Malaga"},
    {id: 3, nombre: "Sevilla"},
    {id: 4, nombre: "Ciudad real"}
  ]
  idProvincia:number = 2;

  resultado: string | null = null;
  visible = true;
  estetica = {importante: true, error: false, urgente: true};
  fontSize= 14;

  constructor(private log:LoggerService) { }


  public get Nombre():string{
    return this.nombre;
  }
  public set Nombre(value:string){
    if(this.nombre === value) return;
    this.nombre = value;


  }


  public saluda():void{
    this.resultado = `Hola ${this.nombre}`;
    this.log.info(this.nombre);
    this.log.error(this.nombre);
    this.log.warn(this.nombre);
  }
  public despide():void{
    this.resultado = `Adios ${this.nombre}`;
  }
  public di(algo:string):void{
    this.resultado = `Dice ${algo}`;
  }
  public cambia():void{
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }
  public calcula(a:number, b:number):number{
    return a + b;
  }
  public add(provincia:string):void{
              //condicion --- resultado 1 si se cumple --- otro resultado si no se cumple lo primero
    const id = this.listado.length === 0 ? 1 : (this.listado[this.listado.length - 1].id + 1);
    this.listado.push({id, nombre: provincia});
    this.idProvincia = id;
  }

  ngOnInit(): void {
  }

}
