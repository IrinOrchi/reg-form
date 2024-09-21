import { Component } from '@angular/core';
import { AccountInformationComponent } from "../../components/account-information/account-information.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [AccountInformationComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

}
