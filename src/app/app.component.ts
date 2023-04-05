import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubmitForm} from "./service/submit.service"
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

    myReactiveForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
      email:new FormControl(null),
      name:new FormControl(null),
      firstName:new FormControl(null),
      remember:new FormControl(null),
    });
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

  myInputValue = ''
  status:true; 

  OnSend(myReactiveForm){
    const submitMyForm = new SubmitForm();
    submitMyForm.OnSubmitForm(this.myReactiveForm, this.myInputValue);
    this.myInputValue =""
  }

}
