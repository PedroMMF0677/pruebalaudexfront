import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnsDataComponent } from './alumns-data.component';

describe('AlumnsDataComponent', () => {
  let component: AlumnsDataComponent;
  let fixture: ComponentFixture<AlumnsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
