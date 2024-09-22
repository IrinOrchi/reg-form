import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-address',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.css']
})
export class CompanyAddressComponent {
  selectedCountry: string = '-1';

  isBangladeshSelected(): boolean {
    return this.selectedCountry === '1'; // Assuming '1' is the value for Bangladesh
  }
}
