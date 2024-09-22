import { Component } from '@angular/core';
import { AccountInformationComponent } from "../../components/account-information/account-information.component";
import { InputFieldComponent } from "../../components/input-field/input-field.component";
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';
import { CompanyAddressComponent } from "../../components/company-address/company-address.component";
import { IndustryTypeComponent } from "../../components/industry-type/industry-type.component";
import { BusinessDetailsComponent } from "../../components/business-details/business-details.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [AccountInformationComponent, InputFieldComponent, CompanyInfoComponent, CompanyAddressComponent, IndustryTypeComponent, BusinessDetailsComponent, ContactComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
