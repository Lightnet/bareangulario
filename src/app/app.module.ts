// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [AppComponent,HomeComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}