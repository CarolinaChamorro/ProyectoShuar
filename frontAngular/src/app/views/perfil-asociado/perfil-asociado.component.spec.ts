import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAsociadoComponent } from './perfil-asociado.component';

describe('PerfilAsociadoComponent', () => {
  let component: PerfilAsociadoComponent;
  let fixture: ComponentFixture<PerfilAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
