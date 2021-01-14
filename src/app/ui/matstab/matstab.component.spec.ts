import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatstabComponent } from './matstab.component';

describe('MatstabComponent', () => {
  let component: MatstabComponent;
  let fixture: ComponentFixture<MatstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
