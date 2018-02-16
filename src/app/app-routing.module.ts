import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WizardEmbedExampleComponent } from './wizard-embed-example/wizard-embed-example.component';
const routes = [
  {path: 'wizard', component: WizardEmbedExampleComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
