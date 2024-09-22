import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-info',
  standalone:true,
  templateUrl: './company-info.component.html',
  imports:[InputFieldComponent,CommonModule],
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent {
  companyDetails = {
    companyName: '',
    companyNameBangla: '',
    companyEstablished: '',
    companySize: '-1'
  };

  // Additional logic can be added here for form submission and validation
}
