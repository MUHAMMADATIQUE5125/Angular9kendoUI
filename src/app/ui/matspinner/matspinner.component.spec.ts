import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatspinnerComponent } from './matspinner.component';

describe('MatspinnerComponent', () => {
  let component: MatspinnerComponent;
  let fixture: ComponentFixture<MatspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
