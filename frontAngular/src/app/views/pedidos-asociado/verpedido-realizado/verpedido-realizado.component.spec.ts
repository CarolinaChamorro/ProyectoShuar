import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidoRealizadoComponent } from './verpedido-realizado.component';

describe('VerpedidoRealizadoComponent', () => {
  let component: VerpedidoRealizadoComponent;
  let fixture: ComponentFixture<VerpedidoRealizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidoRealizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpedidoRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
