import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit {

  testFormControl = new FormControl('預設值', Validators.required);

  constructor() {}

  ngOnInit(): void {}

  setValue(emitEvent = true): void {
    this.testFormControl.setValue(
      `使用 setValue 改變了值。emitEvent:${emitEvent}`,
      {
        emitEvent,
      }
    );
  }

  patchValue(emitEvent = true): void {
    this.testFormControl.patchValue(
      `使用 patchValue 改變了值。emitEvent:${emitEvent}`,
      {
        emitEvent,
      }
    );
  }

  reset(emitEvent = true): void {
    this.testFormControl.reset(`使用 reset 改變了值。emitEvent:${emitEvent}`, {
      emitEvent,
    });
  }

  disable(emitEvent = true): void {
    this.testFormControl.disable({
      emitEvent,
    });
  }

  enable(emitEvent = true): void {
    this.testFormControl.enable({
      emitEvent,
    });
  }
}
