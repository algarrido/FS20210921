import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriasViewModelService } from './servicios.service';

@Component({
  selector: 'app-categoria',
  templateUrl: 'categoria.component.html'
})
export class CategoriasComponent {
  public page: number = 0;
  constructor(protected vm: CategoriasViewModelService) {

  }
  public get VM(): CategoriasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
