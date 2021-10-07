import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [

    {texto: 'Formulario', icono:'', componente:FormularioComponent},
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
