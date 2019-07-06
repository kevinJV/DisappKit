import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
      [
        {
          path: 'news',
          children:
            [
              {
                path: '',
                loadChildren: '../news/news.module#NewsPageModule'
              }
            ]
        },
        {
          path: 'tips',
          children:
            [
              {
                path: '',
                loadChildren: '../tips/tips.module#TipsPageModule'
              }
            ]
        },
        {
          path: 'events',
          children:
            [
              {
                path: '',
                loadChildren: '../events/events.module#EventsPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class HomePageRoutingModule {
    
}