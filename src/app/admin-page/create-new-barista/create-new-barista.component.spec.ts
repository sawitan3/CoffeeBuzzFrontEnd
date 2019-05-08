import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBaristaComponent } from './create-new-barista.component';

describe('CreateNewBaristaComponent', () => {
  let component: CreateNewBaristaComponent;
  let fixture: ComponentFixture<CreateNewBaristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBaristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBaristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
