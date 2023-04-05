import { Component, OnInit,forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { SubmitForm} from "../service/submit.service"

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>FormInputComponent ),
      multi: true
    }
  ]
})
export class FormInputComponent implements ControlValueAccessor, OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label: string;
  @Input() placeholder: string;


  field: string;

  onChange = (_:any)=>{}
  onTouch = (_:any)=>{}

  set value( val: any ){
    this.field = val;
    this.onChange(val)
    this.onTouch(val)
  }
  get value(){
    return this.field;
  }

  registerOnChange(handleFunction){
    this.onChange = handleFunction
  }
  registerOnTouched(handleFunction) {
    this.onTouch = handleFunction;
  }
  writeValue(value: any){
    this.value = value
  }
  // setDisabledState?(isDisabled: boolean): void {

  // }


//   OnSend(){
//     const submitMyForm = new SubmitForm();
//     submitMyForm.OnSubmitForm(this.title)
//   }
}
