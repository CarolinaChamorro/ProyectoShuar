import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilConductorComponent } from './perfil-conductor.component';

describe('PerfilConductorComponent', () => {
  let component: PerfilConductorComponent;
  let fixture: ComponentFixture<PerfilConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilConductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
