import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpFormsComponent } from './sing-up-forms.component';

describe('SingUpFormsComponent', () => {
  let component: SingUpFormsComponent;
  let fixture: ComponentFixture<SingUpFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingUpFormsComponent]
    });
    fixture = TestBed.createComponent(SingUpFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
