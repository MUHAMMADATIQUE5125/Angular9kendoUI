import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoComponent } from './kendo.component';

describe('KendoComponent', () => {
  let component: KendoComponent;
  let fixture: ComponentFixture<KendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
