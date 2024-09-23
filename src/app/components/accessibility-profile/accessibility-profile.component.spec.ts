import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityProfileComponent } from './accessibility-profile.component';

describe('AccessibilityProfileComponent', () => {
  let component: AccessibilityProfileComponent;
  let fixture: ComponentFixture<AccessibilityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
