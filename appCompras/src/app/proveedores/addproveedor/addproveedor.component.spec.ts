import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproveedorComponent } from './addproveedor.component';

describe('AddproveedorComponent', () => {
  let component: AddproveedorComponent;
  let fixture: ComponentFixture<AddproveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproveedorComponent]
    });
    fixture = TestBed.createComponent(AddproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
