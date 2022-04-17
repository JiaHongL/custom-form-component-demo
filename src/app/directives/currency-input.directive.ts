import {
  Directive,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
  Type,
  HostListener,
} from '@angular/core';

import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { CurrencyPipe } from '@angular/common';

export const CURRENCY_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CurrencyInputDirective),
  multi: true,
};

@Directive({
  selector: '[appCurrencyInput]',
  providers: [CURRENCY_INPUT_VALUE_ACCESSOR],
})
export class CurrencyInputDirective
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @HostListener('focus') onFocus(): void {
    this.elementRef.nativeElement.value = this.ngControl?.control?.value;
    this.appOnFocus.emit(this.ngControl?.control?.value);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
    const newData = this.elementRef.nativeElement.value.replace(/,/g, '');
    this.onChange(!isNaN(Number(newData)) ? Number(newData) : newData);
    this.elementRef.nativeElement.value = this.formatCurrency(
      this.ngControl?.control?.value
    );
    this.appOnBlur.emit(this.ngControl?.control?.value);
  }

  ngControl!: NgControl;

  currencyPipe = new CurrencyPipe('en-US');

  @Input() placeholder = '';

  @Input() disabled = false;

  @Output() appOnFocus = new EventEmitter<any>();

  @Output() appOnBlur = new EventEmitter<any>();

  constructor(private inj: Injector, private elementRef: ElementRef) {}

  onChange!: (value: any) => void;

  onTouched!: () => void;

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl as Type<NgControl>);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.value = this.formatCurrency(
      this.ngControl?.control?.value
    );
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(val: any): void {
    if (this.elementRef) {
      this.elementRef.nativeElement.value = this.formatCurrency(val);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  formatCurrency(data: any): any {
    let newData = data;
    if (!isNaN(Number(data))) {
      newData = this.currencyPipe.transform(data, 'TWD', 'symbol', '0.0');
    }
    return newData;
  }

}
