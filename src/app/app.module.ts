import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingList } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    routingList,
    AppComponent,
    MenuComponent,
    HomeComponent,
    DoctorsComponent,
    PatientsComponent,
    MedicinesComponent,
    PrescriptionsComponent,
    ProfileComponent,
    SearchBarComponent
  ],
  imports: [
    FormsModule,
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
