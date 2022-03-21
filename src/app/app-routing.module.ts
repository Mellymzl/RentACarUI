import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './features/admin/pages/car-detail/car-detail.component';
import { CarComponent } from './features/admin/pages/car/car.component';

const routes: Routes = [


  {
    path:"", pathMatch:"full", component: CarComponent
  },
  {path: "cars", component:CarComponent},
  {path: "cardetails/:id", component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
