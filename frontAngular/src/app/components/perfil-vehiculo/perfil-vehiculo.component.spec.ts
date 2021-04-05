import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVehiculoComponent } from './perfil-vehiculo.component';

describe('PerfilVehiculoComponent', () => {
  let component: PerfilVehiculoComponent;
  let fixture: ComponentFixture<PerfilVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
