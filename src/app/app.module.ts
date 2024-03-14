import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    CommonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}