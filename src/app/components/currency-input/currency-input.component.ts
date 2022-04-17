import {
  AfterViewInit, Component, ElementRef, EventEmitter, forwardRef,
  Injector, Input, OnInit, Output, Type, ViewChild
} from '@angular/core';

import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';

export const CURRENCY_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CurrencyInputComponent),
  multi: true
};

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
  providers: [CURRENCY_INPUT_VALUE_ACCESSOR]
})
export class CurrencyInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  ngControl!: NgControl;

  currencyPipe = new CurrencyPipe('en-US');

  @ViewChild('input', { static: false }) input!: ElementRef;

  @Input() placeholder = '';

  @Input() disabled = false;

  @Input('class') set class(value: string) {
    const classList = value.split(' ');
    setTimeout(() => {
      if (this.input) {
        this.input.nativeElement.classList = 'form-control';
        classList.forEach((className) => {
          this.input.nativeElement.classList.add(className);
        });
      }
    });
  }

  @Output() appOnFocus = new EventEmitter<any>();

  @Output() appOnBlur = new EventEmitter<any>();

  constructor(
    private inj: Injector
  ) {
  }

  onChange!: (value:any) => void;

  onTouched!: () => void;

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl as Type<NgControl>);
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.value = this.formatCurrency(this.ngControl?.control?.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(val: any): void {
    if (this.input) {
      this.input.nativeElement.value = this.formatCurrency(val);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focus(): void {
    this.input.nativeElement.value = this.ngControl?.control?.value;
    this.appOnFocus.emit(this.ngControl?.control?.value);
  }

  blur(): void {
    this.onTouched();
    const newData = this.input.nativeElement.value.replace(/,/g, '');
    this.onChange(!isNaN(Number(newData)) ? Number(newData) : newData);
    this.input.nativeElement.value = this.formatCurrency(this.ngControl?.control?.value);
    this.appOnBlur.emit(this.ngControl?.control?.value);
  }

  formatCurrency(data: any): any {
    let newData = data;
    if (!isNaN(Number(data))) {
      newData = this.currencyPipe.transform(data, 'TWD', 'symbol', '0.0');
    }
    return newData;
  }

}
