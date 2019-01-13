import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedCity: ICity;
  cityList: Array<ICity> = [];

  onCitySelected(cityP: ICity) {
    this.selectedCity = cityP;
  }

  onCityChanged(cityP: ICity) {
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].id === this.selectedCity.id) {
        this.cityList[i] = cityP;
        this.selectedCity = null;
        return;
      }
    }
  }

  onCityAdded(cityP: ICity) {
    const duplicateIdCity = this.cityList.find(city => city.id === cityP.id);

    if (!duplicateIdCity) {
      this.cityList.push(cityP);
    }

    this.selectedCity = null;
  }

  onCityRemoved() {
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].id === this.selectedCity.id) {
        this.cityList.splice(i, 1);
        this.selectedCity = null;
        return;
      }
    }
  }

}

export interface ICity {
  id: number;
  title: string;
  color: string;
  text: string;
}
