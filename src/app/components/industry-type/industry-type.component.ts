import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industry-type.component.html',
  styleUrls: ['./industry-type.component.scss']
})
export class IndustryTypeComponent {
  selectedCategory: string = '';

  types = [
    { label: 'Advertising Agency', value: 'Teaching' },
    { label: 'Advertising Technology (AdTech) Startup', value: 'Technology' },
    { label: 'App Developer', value: 'Technology' },
    { label: 'Architecture Firm', value: 'Architecture' },
    { label: 'Civil Engineering', value: 'Engineering' },
    { label: 'Electrical Engineering', value: 'Engineering' },
    { label: 'Software Development', value: 'Technology' },
    { label: 'Healthcare Services', value: 'Healthcare' },
    { label: 'Financial Consulting', value: 'Finance' },
    { label: 'Hospitality Management', value: 'Hospitality' }
   
  ];

  getTypes() {
    if (this.selectedCategory === 'Others' || this.selectedCategory === '') {
      return this.types;
    } else {
      return this.types.filter(type => type.value === this.selectedCategory);
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }
}
