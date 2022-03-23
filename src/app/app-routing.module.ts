import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './features/admin/pages/brands/brand-add/brand-add.component';
import { CarAddComponent } from './features/admin/pages/cars/car-add/car-add.component';
import { CarDetailComponent } from './features/admin/pages/cars/car-detail/car-detail.component';
import { CarComponent } from './features/admin/pages/cars/car/car.component';
import { ColorAddComponent } from './features/admin/pages/colors/color-add/color-add.component';

const routes: Routes = [


  {
    path:"", pathMatch:"full", component: CarComponent
  },
  {path: "cars", component:CarComponent},
  {path: "cars/:brandid", component:CarComponent},
  {path: "cars/:colorid", component:CarComponent},
  {path: "cardetail/:id", component:CarDetailComponent},
  {path:"caradd", component:CarAddComponent},
  {path:"coloradd", component:ColorAddComponent},
  {path:"brandadd", component:BrandAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
