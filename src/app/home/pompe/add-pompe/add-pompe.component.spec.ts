import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPompeComponent } from './add-pompe.component';

describe('AddPompeComponent', () => {
  let component: AddPompeComponent;
  let fixture: ComponentFixture<AddPompeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPompeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
