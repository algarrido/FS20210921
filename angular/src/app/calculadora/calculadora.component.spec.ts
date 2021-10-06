import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Calculos',()=>{
  it('poner_digito', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('2');
      expect(c.buffer).toBe('2');
      c.handleNumber('3');
      expect(c.buffer).toBe('23');
  });

  it('sumar', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('10');
      c.handleSymbol('+');
      c.handleNumber('10');
      c.handleSymbol('=');
      expect(c.buffer).toBe('20');
  });

  it('restar', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('10');
      c.handleSymbol('-');
      c.handleNumber('5')
      c.handleSymbol('=');
      expect(c.buffer).toBe('5');
  });

  it('multiplicar', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('5');
      c.handleSymbol('x');
      c.handleNumber('5')
      c.handleSymbol('=');
      expect(c.buffer).toBe('25');
  });

  it('dividir', () => {
    let c = new CalculadoraComponent();
      c.handleNumber('2');
      c.handleSymbol('/');
      c.handleNumber('2')
      c.handleSymbol('=');
      expect(c.buffer).toBe('1');
  });

})

describe('Borrar ←',()=>{
  it('borrar_digito', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('1234');
      c.handleSymbol('←');
      expect(c.buffer).toBe('123');
      c.handleSymbol('←');
      expect(c.buffer).toBe('12');
      c.handleSymbol('←');
      expect(c.buffer).toBe('1');
      c.handleSymbol('←');
      expect(c.buffer).toBe('0');
  });

})
describe('limpiar C',()=>{
  it('cambiar_signo', () => {
      let c = new CalculadoraComponent();
      c.handleNumber('200');
      c.handleSymbol('C');
      expect(c.buffer).toBe('0');
  });
})


