import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoGuard } from './info.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canLoad: [InfoGuard] // Use InfoGuard to determine whether to display additional info
  },
  {
    path: 'share-location',
    loadChildren: () => import('./share-location/share-location.module').then( m => m.ShareLocationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'map-view',
    loadChildren: () => import('./map-view/map-view.module').then( m => m.MapViewPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view-email',
    loadChildren: () => import('./view-email/view-email.module').then( m => m.ViewEmailPageModule)
  },
  {
    path: 'other-view',
    loadChildren: () => import('./other-view/other-view.module').then( m => m.OtherViewPageModule)
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'lost',
    loadChildren: () => import('./lost/lost.module').then( m => m.LostPageModule)
  },
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  
  {
    path: 'person',
    loadChildren: () => import('./person-content/person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'edit-contact',
    loadChildren: () => import('./person-content/edit-contact/edit-contact.module').then( m => m.EditContactPageModule)
  },
  {
    path: 'modify-contact',
    loadChildren: () => import('./person-content/modify-contact/modify-contact.module').then( m => m.ModifyContactPageModule)
  },
  
  {
    path: 'register1',
    loadChildren: () => import('./login2.0/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'product-create',
    loadChildren: () => import('./test1.0/product-create/product-create.module').then( m => m.ProductCreatePageModule)
  },
  {
    path: 'product-listas',
    loadChildren: () => import('./test1.0/product-listas/product-listas.module').then( m => m.ProductListasPageModule)
  },
  {
    path: 'modal-content',
    loadChildren: () => import('./test1.0/modal-content/modal-content.module').then( m => m.ModalContentPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
