import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepereComponent } from './list-repere.component';

describe('ListRepereComponent', () => {
  let component: ListRepereComponent;
  let fixture: ComponentFixture<ListRepereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
