import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICity } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input() selectedCity: ICity;
  @Input() cityList: Array<ICity>;
  @Output() citySelected = new EventEmitter<ICity>();

  constructor() { }

  ngOnInit() {}

  setActive(city: ICity) {
    this.citySelected.emit(city);
  }

}
