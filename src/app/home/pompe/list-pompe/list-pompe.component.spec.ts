import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPompeComponent } from './list-pompe.component';

describe('ListPompeComponent', () => {
  let component: ListPompeComponent;
  let fixture: ComponentFixture<ListPompeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPompeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
