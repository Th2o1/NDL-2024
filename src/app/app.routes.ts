import { Routes } from '@angular/router';
import { CreditsComponent } from './components/credits/credits.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'credits', component: CreditsComponent }
];
