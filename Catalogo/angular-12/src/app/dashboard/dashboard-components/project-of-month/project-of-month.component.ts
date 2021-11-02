import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeliculasViewModelService } from './servicios.service';

@Component({
  selector: 'app-project-of-month',
  templateUrl: './project-of-month.component.html',
  styleUrls: ['./project-of-month.component.css']
})
export class ProjectOfMonthComponent implements OnInit {


  constructor(protected vm: PeliculasViewModelService) {

  }
  public get VM(): PeliculasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }

}
