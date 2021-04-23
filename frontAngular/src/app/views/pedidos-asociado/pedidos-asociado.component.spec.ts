import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAsociadoComponent } from './pedidos-asociado.component';

describe('PedidosAsociadoComponent', () => {
  let component: PedidosAsociadoComponent;
  let fixture: ComponentFixture<PedidosAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
