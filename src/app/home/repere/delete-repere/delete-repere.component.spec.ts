import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRepereComponent } from './delete-repere.component';

describe('DeleteRepereComponent', () => {
  let component: DeleteRepereComponent;
  let fixture: ComponentFixture<DeleteRepereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRepereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRepereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
