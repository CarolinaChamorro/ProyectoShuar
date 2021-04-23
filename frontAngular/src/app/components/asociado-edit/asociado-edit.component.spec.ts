import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociadoEditComponent } from './asociado-edit.component';

describe('AsociadoEditComponent', () => {
  let component: AsociadoEditComponent;
  let fixture: ComponentFixture<AsociadoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociadoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
