import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {HomeComponent} from './features/home/home.component';
import {ListGameComponent} from './features/game/list-game/list-game.component';
import {DetailGameComponent} from './features/game/detail-game/detail-game.component';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {CreateGameComponent} from './features/game/create-game/create-game.component';
import {HeaderDashboardComponent} from './core/header-dashboard/header-dashboard.component';
import {SearchComponent} from './features/search/search.component';
import {EditGameComponent} from './features/game/edit-game/edit-game.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'search', component: SearchComponent},
      {path: 'games', component: ListGameComponent},
      {path: 'games/:id', component: DetailGameComponent},
    ]
  },

  {
    path: '',
    component: HeaderDashboardComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'dashboard/create/game', component: CreateGameComponent},
      {path: 'dashboard/edit/game/:id', component: EditGameComponent},
    ]
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
