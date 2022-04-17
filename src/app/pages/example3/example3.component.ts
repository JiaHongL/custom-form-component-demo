import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component implements OnInit {
  testFormControl = new FormControl(123456, Validators.pattern('^[0-9]*$'),);

  testField = '123456789';

  className = 'w-50';

  constructor() {}

  ngOnInit(): void {}

  setValue(emitEvent = true): void {
    this.testFormControl.setValue(123456789, {
      emitEvent,
    });
  }

  reset(emitEvent = true): void {
    this.testFormControl.reset(123456, {
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

  log(state: string,value:string) {
    console.log(state,value);
  }
}
