import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-color',
  templateUrl: './sidebar-color.component.html',
})
export class SidebarColorComponent {
  @Input() color;
}
