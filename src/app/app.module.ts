import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './features/admin/pages/navi/navi.component';
import { BrandComponent } from './features/admin/pages/brand/brand.component';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ListboxModule} from 'primeng/listbox';
import { ColorComponent } from './features/admin/pages/color/color.component';
import { CarComponent } from './features/admin/pages/car/car.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { CarDetailComponent } from './features/admin/pages/car-detail/car-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TableModule,
    ProgressSpinnerModule,
    ListboxModule,
    CardModule,
    ButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
