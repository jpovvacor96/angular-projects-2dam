import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeventbindingComponent } from './ejeventbinding.component';

describe('EjeventbindingComponent', () => {
  let component: EjeventbindingComponent;
  let fixture: ComponentFixture<EjeventbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjeventbindingComponent]
    });
    fixture = TestBed.createComponent(EjeventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
