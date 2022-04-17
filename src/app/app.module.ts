import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExampleComponent } from './pages/example/example.component';
import { Example2Component } from './pages/example2/example2.component';
import { Example3Component } from './pages/example3/example3.component';

import { TextInputComponent } from './components/text-input/text-input.component';

import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { CurrencyInputDirective } from './directives/currency-input.directive';

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
