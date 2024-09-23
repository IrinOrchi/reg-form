import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accessibility-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './accessibility-profile.component.html',
  styleUrls: ['./accessibility-profile.component.scss']
})
export class AccessibilityProfileComponent {
  facilitiesForDisabilities: boolean = false;
  disabilityPolicy: number | null = null;
  supportForImplementing: number | null = null;

  disabilities = [
    { label: 'Accessible documentation and alternative formats', value: '1', checked: false },
    { label: 'Accessible Washrooms / Toilets', value: '2', checked: false },
    { label: 'Adapted Transport facility for Distant Travelling', value: '3', checked: false },
    { label: 'Assistive Software, communication and computer devices', value: '4', checked: false },
    { label: 'Available Flexible working shifts', value: '5', checked: false },
    { label: 'Offering Work from home', value: '6', checked: false },
    { label: 'Ramps or Lifts or Escalators for entry and move between floors', value: '7', checked: false },
    { label: 'Reasonable Accommodation in Recruitment/interview procedures like sign language, oral/typed/video interview', value: '8', checked: false },
    { label: 'Warning Indicators or Markers in place for hazards, staircase', value: '9', checked: false },
    { label: 'Workstation or seating adaptations for easy use', value: '10', checked: false },
  ];
}
