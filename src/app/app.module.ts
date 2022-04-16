import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

import { TextInputComponent } from './text-input/text-input.component';

import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { CurrencyInputDirective } from './currency-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example2Component,
    Example3Component,
    TextInputComponent,
    CurrencyInputComponent,
    CurrencyInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
