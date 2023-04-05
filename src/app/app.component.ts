import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SubmitFormService} from "./service/submit.service"
// import { FormBuilder, FormGroup } from '@angular/forms';
export interface User {
  username: string;
  password: string;
  email: string;
  name: string;
  firstName: string;
  remember: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  usernamePlaceholder: string = "Your username";
  passwordPlaceholder: string = "Your password";
  namePlaceholder: string = "Your name";
  firstNamePlaceholder: string = "Your first name";
  emailPlaceholder: string = "Your email";

    // myReactiveForm = new FormGroup({
    //   username: new FormControl(null),
    //   password: new FormControl(null),
    //   email:new FormControl(null),
    //   name:new FormControl(null),
    //   firstName:new FormControl(null),
    //   remember:new FormControl(null),
    // });
  // onSubmit(){
  //   console.log(this.myReactiveForm);

  //   const data:User = {

  //     username:"",
  //     password: "",
  //     email:"",
  //     name:"",
  //     firstName: "",
  //     remember:true,
  //   }
  // }

  // myInputValue = ''
  // status:true; 

  // OnSend(myReactiveForm){
  //   const submitMyForm = new SubmitForm();
  //   submitMyForm.OnSubmitForm(this.myReactiveForm, this.myInputValue);
  //   this.myInputValue =""
  // }


  myReactiveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private SubmitFormService: SubmitFormService
  ) {
    this.myReactiveForm = this.formBuilder.group({
      username: new FormControl(null),
      password: new FormControl(null),
      email:new FormControl(null),
      name:new FormControl(null),
      firstName:new FormControl(null),
      remember:new FormControl(null),
    });
  }

  onSubmit() {
    if (this.myReactiveForm.valid){
      const formData = this.myReactiveForm.value;
    const success = this.SubmitFormService.handleService(formData);

     if (success === true) {
       console.log(this.myReactiveForm.value); 
      this.myReactiveForm.reset();
      }
    }
}

}
