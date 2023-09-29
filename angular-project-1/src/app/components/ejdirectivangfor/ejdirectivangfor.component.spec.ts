import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangforComponent } from './ejdirectivangfor.component';

describe('EjdirectivangforComponent', () => {
  let component: EjdirectivangforComponent;
  let fixture: ComponentFixture<EjdirectivangforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjdirectivangforComponent]
    });
    fixture = TestBed.createComponent(EjdirectivangforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
