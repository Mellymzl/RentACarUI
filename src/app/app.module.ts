import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './features/admin/pages/navi/navi.component';
import { BrandComponent } from './features/admin/pages/brands/brand/brand.component';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ListboxModule} from 'primeng/listbox';
import { ColorComponent } from './features/admin/pages/colors/color/color.component';
import { CarComponent } from './features/admin/pages/cars/car/car.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { CarDetailComponent } from './features/admin/pages/cars/car-detail/car-detail.component';
import { CarAddComponent } from './features/admin/pages/cars/car-add/car-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandAddComponent } from './features/admin/pages/brands/brand-add/brand-add.component';
import { ColorAddComponent } from './features/admin/pages/colors/color-add/color-add.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { LoginComponent } from './features/admin/pages/auth/login/login.component';
import { UserRegisterComponent } from './features/admin/pages/auth/user-register/user-register.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    LoginComponent,
    UserRegisterComponent
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
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
