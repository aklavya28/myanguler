import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarpPanelComponent } from './bootstarp-panel.component';

describe('BootstarpPanelComponent', () => {
  let component: BootstarpPanelComponent;
  let fixture: ComponentFixture<BootstarpPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstarpPanelComponent]
    });
    fixture = TestBed.createComponent(BootstarpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
