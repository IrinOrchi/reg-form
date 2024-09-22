import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() label!: string;         // The label for the input field
  @Input() name!: string;          // The name attribute of the input
  @Input() id!: string;            // The id attribute of the input
  @Input() placeholder: string = ''; // Placeholder text
  @Input() value: string = '';     // Value of the input field
  @Input() maxLength: number = 255; // Maximum length for the input
  @Input() isRequired: boolean = true; // Whether the field is required
  // @Input() errorMessage: string = ''; // Optional error message for validation
}
