import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component'; // Assuming the custom input field component exists

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [FormsModule, InputFieldComponent],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
  businessDescription: string = '';
  businessLicenseNo: string = '';
  rlNo: string = '';
  websiteUrl: string = '';
}
