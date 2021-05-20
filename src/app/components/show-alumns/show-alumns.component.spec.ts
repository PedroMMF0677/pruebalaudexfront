import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlumnsComponent } from './show-alumns.component';

describe('ShowAlumnsComponent', () => {
  let component: ShowAlumnsComponent;
  let fixture: ComponentFixture<ShowAlumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
