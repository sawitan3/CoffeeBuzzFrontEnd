import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaTableComponent } from './barista-table.component';

describe('BaristaTableComponent', () => {
  let component: BaristaTableComponent;
  let fixture: ComponentFixture<BaristaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
