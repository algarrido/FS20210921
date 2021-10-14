import { TestBed } from '@angular/core/testing';
import { ServiciosService } from './servicios.service';


describe('ServiciosService', () => {
  let service: ServiciosServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
