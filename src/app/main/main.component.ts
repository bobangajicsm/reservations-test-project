import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ICity } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnChanges {
  @Input() selectedCity: ICity;
  @Output() cityChanged = new EventEmitter<ICity>();
  @Output() cityAdded = new EventEmitter<ICity>();
  @Output() cityRemoved = new EventEmitter<boolean>();
  editableCity: ICity = {id: null, title: '', color: '', text: ''};

  editField: string;
  citesList: Array<ICity> = [
    { id: 12, title: 'Aurelia Vega', color: '#d14836', text: 'further details' },
  ];

  ngOnChanges(change) {
    if (change['selectedCity'] && change['selectedCity'].currentValue) {
      this.editableCity = {...change['selectedCity'].currentValue};
    } else {

    }
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.citesList[id][property] = editField;
  }

  remove() {
    if (confirm('You are about to remove this entry?!')) {
      this.cityRemoved.emit(true);
      this.editableCity = null;
    }
  }

  add() {
    this.cityAdded.emit(this.editableCity);
    this.editableCity = null;
  }

  save() {
    this.cityChanged.emit(this.editableCity);
    this.editableCity = null;
  }

  changeValue(property: string, event: any, textarea = false) {
      this.editableCity = this.editableCity ? this.editableCity : {id: null, title: '', color: '', text: ''};
      this.editableCity[property] = event.target.value;

  }
}
