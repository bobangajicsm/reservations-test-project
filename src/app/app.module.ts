import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { SidebarColorComponent } from './sidebar/sidebar-color/sidebar-color.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SidebarColorComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
