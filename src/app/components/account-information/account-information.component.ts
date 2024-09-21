import { Component } from '@angular/core'; // Import InputFieldComponent
import { InputFieldComponent } from '../../components/input-field/input-field.component';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css'],
  standalone: true,  // Standalone component
  imports: [InputFieldComponent],  // Import the InputFieldComponent
})
export class AccountInformationComponent {}
