import { Component, OnInit } from '@angular/core';
import { CategoriasViewModelService } from './servicios.service';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css']
})
export class SalesGraphComponent implements OnInit {

    constructor(protected vm: CategoriasViewModelService) {

    }
    public get VM(): CategoriasViewModelService {
      return this.vm;
    }
    ngOnInit(): void {
      this.vm.list();
    }


}
