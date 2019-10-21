import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component'


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '', component: MenuComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'doctors', component: DoctorsComponent},
    {path: 'medicines', component: MedicinesComponent},
    {path: 'patients', component: PatientsComponent},
    {path: 'prescriptions', component: PrescriptionsComponent},
    {path: 'profile', component: ProfileComponent}
  // ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingList = [
    MenuComponent, DoctorsComponent, MedicinesComponent, PatientsComponent, PrescriptionsComponent, ProfileComponent, SearchBarComponent
];

