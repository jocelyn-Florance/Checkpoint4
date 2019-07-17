import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateGameComponent} from './game/create-game/create-game.component';
import {ListGameComponent} from './game/list-game/list-game.component';
import {DetailGameComponent} from './game/detail-game/detail-game.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import { SearchComponent } from './search/search.component';
import { EditGameComponent } from './game/edit-game/edit-game.component';

@NgModule(
  {
    declarations: [
      HomeComponent,
      CreateGameComponent,
      ListGameComponent,
      DetailGameComponent,
      DashboardComponent,
      SearchComponent,
      EditGameComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(
        {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          closeButton: true,
          progressBar: true,
        }),
    ]
  })
export class FeaturesModule {
}
