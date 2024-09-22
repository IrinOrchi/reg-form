import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactPerson: string = '';
  designation: string = '';
  email: string = '';
  mobile: string = '';

  // Error states
  contactPersonError: boolean = false;
  designationError: boolean = false;
  emailError: boolean = false;

  // Method to allow only numbers for the mobile input
  isNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
