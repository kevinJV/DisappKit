import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'onboarding', loadChildren: './onboarding/onboarding.module#OnboardingPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'tips', loadChildren: './tips/tips.module#TipsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'create-event', loadChildren: './create-event/create-event.module#CreateEventPageModule' },

   /*{ path: '', component: HomePage, children:[
        { path: 'news', children: [
              {
                path: 'news',
                loadChildren: '../news/news.module#NewsPageModule'
              }
            ]
        },
        {
          path: 'tips',
          children:
            [
              {
                path: 'tips',
                loadChildren: '../tips/tips.module#TipsPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: 'news',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
