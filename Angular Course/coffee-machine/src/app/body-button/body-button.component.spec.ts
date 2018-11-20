import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyButtonComponent } from './body-button.component';

describe('BodyButtonComponent', () => {
  let component: BodyButtonComponent;
  let fixture: ComponentFixture<BodyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
