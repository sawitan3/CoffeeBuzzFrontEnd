import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaPageComponent } from './barista-page.component';

describe('BaristaPageComponent', () => {
  let component: BaristaPageComponent;
  let fixture: ComponentFixture<BaristaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
