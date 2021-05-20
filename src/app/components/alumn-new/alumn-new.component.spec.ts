import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnNewComponent } from './alumn-new.component';

describe('AlumnNewComponent', () => {
  let component: AlumnNewComponent;
  let fixture: ComponentFixture<AlumnNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
