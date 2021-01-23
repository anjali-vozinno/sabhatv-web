import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagelinkComponent } from './imagelink/imagelink.component';
import { ShowmodalComponent } from './showmodal/showmodal.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'livepage/:cname', component: ImagelinkComponent
  },
  {
    path:'show', component:ShowmodalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
