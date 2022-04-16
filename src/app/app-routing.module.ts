import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: '**', component: ExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
