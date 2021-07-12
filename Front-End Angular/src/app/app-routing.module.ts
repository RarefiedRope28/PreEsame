import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParkListPageComponent } from './park-list-page/park-list-page.component';

const routes: Routes = [
  { path: '', component: ParkListPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: ':id', component: DetailsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
