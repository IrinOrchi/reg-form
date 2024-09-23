import { Component } from '@angular/core';

@Component({
  selector: 'app-captcha',
  standalone: true,
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  captchaUrl: string = 'assets/bdjobs_captcha.asp'; 
  // Function to refresh the captcha by appending a random query string
  refreshCaptcha() {
    const randomString = Math.random().toString(36).substring(7); // Generates random string
    this.captchaUrl = `assets/bdjobs_captcha.asp?${randomString}`; // Append random string to refresh image
  }
}
