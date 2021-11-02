import { debounceTime } from 'rxjs/operators';
import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IdiomaViewModelService } from './servicios.service';

@Component({
  selector: 'app-idioma',
  templateUrl: 'idioma.component.html',
})
export class IdiomaComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: IdiomaViewModelService) {

  }
  public get VM(): IdiomaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
