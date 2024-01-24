import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FgpasswordPage } from './fgpassword.page';

const routes: Routes = [
  {
    path: '',
    component: FgpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FgpasswordPageRoutingModule {}
