import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculasViewModelService } from 'src/app/dashboard/dashboard-components/project-of-month/servicios.service';
@Component({
  templateUrl: 'peliculas.component.html'
})
export class PeliculasComponent {

  public page: number = 0;
  constructor(protected vm: PeliculasViewModelService) {

  }
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }

}
