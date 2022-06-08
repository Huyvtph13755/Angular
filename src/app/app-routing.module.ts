import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './about-client/about-client.component';
import { LoginComponent } from './auth/login/login.component';
import { CanAccessAdminGuard } from './can-access-admin.guard';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';

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
        path: 'products/:_id',
        component: ProductClientComponent
      },
      {
        path: 'product-detail/:_id',
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
    canActivate: [CanAccessAdminGuard],
    children: [
      // {
      //   path: "",
      //   redirectTo: "users",
      //   pathMatch: 'full'
      // },
      // {
      //   path: "users",
      //   component: UserComponent
      // }
      {
        path: "products", 
        children: [
          {
            path: "",
            component: AdminProductListComponent
          },
          {
            path: "create",
            component: AdminProductFormComponent
          },
          {
            path: "edit/:_id",
            component: AdminProductFormComponent
          },
          {
            path: ":_id",
            component: AdminProductDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
