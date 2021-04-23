import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAsociadoComponent } from './catalogo-asociado.component';

describe('CatalogoAsociadoComponent', () => {
  let component: CatalogoAsociadoComponent;
  let fixture: ComponentFixture<CatalogoAsociadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoAsociadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAsociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
