
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  standalone: true,  // Ensure this is standalone if needed
})
export class InputFieldComponent {
  @Input() label!: string;
  @Input() type: string = 'text';  // Default to 'text' if type not provided
  @Input() name!: string;
  @Input() id!: string;
  @Input() placeholder!: string;
  @Input() errorMsg!: string;
}