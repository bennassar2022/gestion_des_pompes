import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepereComponent } from './edit-repere.component';

describe('EditRepereComponent', () => {
  let component: EditRepereComponent;
  let fixture: ComponentFixture<EditRepereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRepereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
