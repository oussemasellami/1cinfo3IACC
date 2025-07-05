import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { UpdateResComponent } from './update-res/update-res.component';


const routes:Routes=[
  {path:"",redirectTo:"residence",pathMatch:'full'},
  {path:"home" ,component:HomeComponent},
    {path:"residence" ,component:ResidenceComponent},
     {path:"product" ,component:ProductComponent},
     {path:"Addresidence" ,component:FormulaireComponent},
    {path:"details/:id" ,component:DetailsComponent},
     {path:"update/:id" ,component:UpdateResComponent},
     {path:"detailsproduct/:id" ,component:DetailsproductComponent},
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
