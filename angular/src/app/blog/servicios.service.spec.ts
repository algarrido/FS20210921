import { TestBed } from '@angular/core/testing';

import { BlogViewModelService } from './servicios.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

export class DAOServiceMock<T,K>{
  constructor(private listado: Array<T>){

  }

}

fdescribe('BlogViewModelService', () => {
  let service: BlogViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [NotificationService, LoggerService],
    });

    service = TestBed.inject(BlogViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
