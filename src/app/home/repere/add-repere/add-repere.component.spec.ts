import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepereComponent } from './add-repere.component';

describe('AddRepereComponent', () => {
  let component: AddRepereComponent;
  let fixture: ComponentFixture<AddRepereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRepereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
