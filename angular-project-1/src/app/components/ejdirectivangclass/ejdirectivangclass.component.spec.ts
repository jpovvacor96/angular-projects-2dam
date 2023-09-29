import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangclassComponent } from './ejdirectivangclass.component';

describe('EjdirectivangclassComponent', () => {
  let component: EjdirectivangclassComponent;
  let fixture: ComponentFixture<EjdirectivangclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjdirectivangclassComponent]
    });
    fixture = TestBed.createComponent(EjdirectivangclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
