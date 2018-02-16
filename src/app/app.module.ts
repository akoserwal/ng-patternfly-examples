import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WizardModule } from 'patternfly-ng';
import { AppRoutingModule } from './/app-routing.module';
import { WizardEmbedExampleComponent } from './wizard-embed-example/wizard-embed-example.component';


@NgModule({
  declarations: [
    AppComponent,
    WizardEmbedExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WizardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
