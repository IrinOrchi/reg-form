import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../input-field/input-field.component';
import { CaptchaComponent } from '../captcha/captcha.component';

@Component({
  selector: 'app-verification-code',
  standalone: true,
  imports: [FormsModule, CommonModule, InputFieldComponent, CaptchaComponent],
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {
  isPolicyAccepted: boolean = false;

  onContinue() {
    if (this.isPolicyAccepted) {
      // handle the submission logic
      console.log('Form Submitted');
    }
  }
}
