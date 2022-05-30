import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { ChampComponent } from './champ/champ.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
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
  // {
  //   path: "",
  //   component: ProductClientComponent
  // },
  // {
  //   path: "product-detail",
  //   component: ProductDetailClientComponent
  // },
  // {
  //   path: "about",
  //   component: AboutClientComponent
  // }
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent
      },
      {
        path: 'products',
        component: ProductClientComponent
      },
      {
        path: 'product-detail',
        component: ProductDetailClientComponent
      },
      {
        path: 'about',
        component: AboutClientComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "users",
        pathMatch: 'full'
      },
      {
        path: "users",
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
