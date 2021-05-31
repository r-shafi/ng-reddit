import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SubComponent } from './components/pages/sub/sub.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'r/:sub', component: SubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
