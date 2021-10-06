import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [

    {texto: 'Inicio', icono:'', componente:HomeComponent},
    {texto: 'demos', icono:'', componente:DemosComponent},
    {texto: 'Calculadora', icono:'', componente:CalculadoraComponent}
  ];
  actual = this.menu[0].componente;

  constructor() { }

  public seleccionar(indice:number):void{
    this.actual=this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
