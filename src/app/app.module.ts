import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { WindowRef } from './WindowRef';
import { ValidateTokenComponent } from './validate-token/validate-token.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'validate-token', component: ValidateTokenComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    ValidateTokenComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
