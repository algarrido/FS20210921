import { TestBed } from '@angular/core/testing';

import { ContactosViewModelService } from './servicios.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';
import { Observable } from 'rxjs';

export class DAOServiceMock<T,K>{
  constructor(private listado: Array<T>){

  }

}

fdescribe('ContactosViewModelService', () => {
  let service: ContactosViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [NotificationService, LoggerService],
    });

    service = TestBed.inject(ContactosViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
