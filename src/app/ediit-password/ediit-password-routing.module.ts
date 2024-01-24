import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiitPasswordPage } from './ediit-password.page';

const routes: Routes = [
  {
    path: '',
    component: EdiitPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiitPasswordPageRoutingModule {}
