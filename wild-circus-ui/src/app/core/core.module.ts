import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HeaderDashboardComponent} from './header-dashboard/header-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule(
  {
    declarations: [
      HeaderComponent,
      HeaderDashboardComponent,
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    exports: [
      HeaderComponent
    ],
  })
export class CoreModule {
}
