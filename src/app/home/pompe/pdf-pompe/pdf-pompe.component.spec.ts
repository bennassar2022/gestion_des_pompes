import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPompeComponent } from './pdf-pompe.component';

describe('PdfPompeComponent', () => {
  let component: PdfPompeComponent;
  let fixture: ComponentFixture<PdfPompeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPompeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
