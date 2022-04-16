import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  testFormControl = new FormControl('預設字');

  form = new FormGroup({
    testFormControl2: this.testFormControl,
  });

  constructor() {}

  ngOnInit(): void {

    this.testFormControl.statusChanges.subscribe((status) => {
      console.log('statusChanges', status);
    });

    this.testFormControl.valueChanges.subscribe((status) => {
      console.log('valueChanges', status);
    });

  }

  setValue(emitEvent = true): void {
    this.testFormControl.setValue(`使用 setValue 改變了值。emitEvent:${emitEvent}`, {
      emitEvent,
    });
  }

  patchValue(emitEvent = true): void {
    this.testFormControl.patchValue(`使用 patchValue 改變了值。emitEvent:${emitEvent}`, {
      emitEvent,
    });
  }

  reset(emitEvent = true): void {
    this.testFormControl.reset(`使用 reset 改變了值。emitEvent:${emitEvent}`, {
      emitEvent,
    });
  }

  disable(emitEvent = true):void{
    this.testFormControl.disable({
      emitEvent,
    });
  }

  enable(emitEvent = true):void{
    this.testFormControl.enable({
      emitEvent,
    });
  }

}
