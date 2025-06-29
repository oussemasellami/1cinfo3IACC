import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';


const routes:Routes=[
  {path:"",redirectTo:"residence",pathMatch:'full'},
  {path:"home" ,component:HomeComponent},
    {path:"residence" ,component:ResidenceComponent},
    {path:"details/:id" ,component:DetailsComponent},
    {path:"**",component:NotfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes),
  ]
  ,exports:[RouterModule]
})
export class AppRoutingModule { }
