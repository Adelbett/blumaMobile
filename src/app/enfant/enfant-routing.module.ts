import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfantPage } from './enfant.page';

const routes: Routes = [
  {
    path: '',
    component: EnfantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfantPageRoutingModule {}
