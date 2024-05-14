import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from './../housing-location/housing-location';
import { HousingService } from './../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocations: HousingLocation[] = [];
  filteredLocations: HousingLocation[] = [];
  allCities: string[] = [];
  housingService: HousingService = inject(HousingService);
  selectedCity: string = '';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocations: HousingLocation[]) => {
      this.housingLocations = housingLocations;
      this.filteredLocations = housingLocations;
      this.allCities = Array.from(new Set(this.housingLocations.map(location => location.city)));
    });
  }

  onOptionChange(event: Event) {
    const selectElement = event?.target as HTMLSelectElement;
    const selectedCity = selectElement.value;
    this.filteredLocations = this.housingLocations.filter((housingLocation: HousingLocation) => {
      return housingLocation.city.toLowerCase().includes(selectedCity.toLowerCase());
    });
  }
}
