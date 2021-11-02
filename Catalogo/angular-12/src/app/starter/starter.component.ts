import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'Navega por nuestra web, aqui encontrarás todas las peliculas de extreno!';
  }

  ngAfterViewInit() {}
}
