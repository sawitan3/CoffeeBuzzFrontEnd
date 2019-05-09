import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBaristaComponent } from './edit-barista.component';

describe('EditBaristaComponent', () => {
  let component: EditBaristaComponent;
  let fixture: ComponentFixture<EditBaristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBaristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBaristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
