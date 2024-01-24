import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tabs/tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'editprofil',
    loadChildren: () => import('./editprofil/editprofil.module').then(m => m.EditprofilPageModule)
  },

  {
    path: 'edit-phone',
    loadChildren: () => import('./edit-phone/edit-phone.module').then(m => m.EditPhonePageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordPageModule)
  },
  {
    path: 'fgpassword',
    loadChildren: () => import('./fgpassword/fgpassword.module').then(m => m.FgpasswordPageModule)
  },
  {
    path: 'enfant',
    loadChildren: () => import('./enfant/enfant.module').then(m => m.EnfantPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then(m => m.CalenderPageModule)
  },
  {
    path: 'ediit-password',
    loadChildren: () => import('./ediit-password/ediit-password.module').then(m => m.EdiitPasswordPageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
  {
    path: 'fgsucces',
    loadChildren: () => import('./fgsucces/fgsucces.module').then( m => m.FgsuccesPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
