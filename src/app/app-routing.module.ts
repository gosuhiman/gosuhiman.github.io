import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSkillsComponent } from './main-skills/main-skills.component';

const routes: Routes = [
  { path: '', component: MainSkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
