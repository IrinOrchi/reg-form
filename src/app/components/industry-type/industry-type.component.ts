import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-industry-type',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './industry-type.component.html',
  styleUrls: ['./industry-type.component.css']
})
export class IndustryTypeComponent {
  searchQuery: string = '';
  selectedCategory: string = '';

  types = [
    { label: 'Advertising Agency', value: 'Finance' },
    { label: 'Advertising Technology ', value: 'Technology' },
    { label: 'App Developement', value: 'Technology' },
    { label: 'Architecture Firm', value: 'Archtecture' },
    { label: 'Civil Engineering', value: 'Engineering' },
    { label: 'Electrical Engineering', value: 'Engineering' },
    { label: 'Software Development', value: 'Technology' },
    { label: 'Healthcare Services', value: 'Healthcare' },
    { label: 'Financial Consulting', value: 'Finance' },
    { label: 'Hospitality Management', value: 'Hospitality' }
  ];

  filteredTypes = [...this.types]; 

 
  onSearchQueryChange() {
    this.filteredTypes = this.types.filter(type => 
      type.label.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Handle category change
  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;

    if (this.selectedCategory === '' || this.selectedCategory === 'Others') {
      this.filteredTypes = [...this.types];
    } else {
      this.filteredTypes = this.types.filter(type => type.label.includes(this.selectedCategory));
    }
  }

  addNewIndustry() {
    console.log('Add new industry clicked');
  }
}
