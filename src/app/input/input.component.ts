import { Component, OnInit ,forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>InputComponent ),
      multi: true
    }
  ]
})


export class InputComponent implements ControlValueAccessor, OnInit {

 
  @Input() label: string = "";
  @Input() forCNameValue: string = "";
  @Input() placeholderValue: string = "";
  @Input() idInput: string = "";
  @Input() inputType: string = "";
  
  field:any ;

  onChange = (_:any) => {}
  onTouch = (_:any) => {}


  set value(val: string){
    this.field = val
    this.onChange(val)
    this.onTouch(val)
}

  get value ()  {
    return this.field;
  }

  registerOnChange(handleFunction) {
    this.onChange = handleFunction;
  }
  registerOnTouched(handleFunction) {
    this.onTouch = handleFunction;
  }
  writeValue(handleFunction) {
  console.log(handleFunction)
    
  }
  setDisabledState?(isDisabled: boolean): void {

  }


  ngOnInit() {
   
  }

  

}
