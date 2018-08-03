import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartscompComponent } from './chartscomp.component';

describe('ChartscompComponent', () => {
  let component: ChartscompComponent;
  let fixture: ComponentFixture<ChartscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
