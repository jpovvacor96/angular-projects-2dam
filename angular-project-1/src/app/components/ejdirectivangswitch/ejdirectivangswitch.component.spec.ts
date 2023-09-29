import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangswitchComponent } from './ejdirectivangswitch.component';

describe('EjdirectivangswitchComponent', () => {
  let component: EjdirectivangswitchComponent;
  let fixture: ComponentFixture<EjdirectivangswitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjdirectivangswitchComponent]
    });
    fixture = TestBed.createComponent(EjdirectivangswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
