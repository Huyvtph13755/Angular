import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampComponent } from './champ/champ.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component:UserComponent
  // },
  // {
  //   path: 'champ',
  //   // component:ChampComponent,

  //   children: [
  //     {
  //       path: 'index',
  //       component:UserComponent
  //     }
  //   ]
  // }
  {
    path: "",
    component: ProductClientComponent
  },
  {
    path: "product-detail",
    component: ProductDetailClientComponent
  },
  {
    path: "about",
    component: AboutClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
