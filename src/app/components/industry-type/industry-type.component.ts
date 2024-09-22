import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-industry-type',
  standalone: true,
  imports:[FormsModule, CommonModule],
  templateUrl: './industry-type.component.html',
  styleUrls: ['./industry-type.component.scss']
})
export class IndustryTypeComponent {
  searchQuery: string = '';
  selectedCategory: string = '';

  types = [
    { label: 'Advertising Agency', value: 'Teaching' },
    { label: 'Software Firm', value: 'Technology' },
    { label: 'Civil Engineering', value: 'Engineering' },
    { label: 'Electrical Engineering', value: 'Engineering' },
    { label: 'Architecture Firm', value: 'Archtecture' },
    { label: 'Hospitality Management', value: 'Hospitality' },
    { label: 'NGO ', value: 'Healthcare' },
    { label: 'Law Firm', value: 'Finance' },
    { label: 'Educational Institute', value: 'Teaching' }
    
  ];

  filteredTypes = [...this.types]; 

  // Handle search input change
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
