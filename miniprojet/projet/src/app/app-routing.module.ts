import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import {InscriptionComponent} from './inscription/inscription.component'
import { ProfileComponent} from './profile/profile.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path:'compte',component:CompteComponent},
  {path:'inscription',component:InscriptionComponent },
  {path:'home',component:HomeComponent },
  {path:'profile',component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
