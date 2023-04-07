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

  myReactiveForm: FormGroup;
  message: string;

  // constructor(private myService: MyService) { }
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
  // private mySubscription: Subscription;

  // currentMessage = messageSource.asObservable(); 
  ngOnInit() {
    this.SubmitFormService.currentMessage.subscribe(message => this.message = message);
  }

  onSubmit() {
    //   const formData = this.myReactiveForm.value;
    //   const success = this.SubmitFormService.handleService();

    //  if (success === true) {
    //    console.log(this.myReactiveForm.value); 
    //   this.myReactiveForm.reset();
    //   }
    this.SubmitFormService.changeMessage('Login successful!');
    
   console.log(this.message)
}

}

// i Created a reactive form in angular and a service. now i want to add a behaviorSubject to my service and i need to subscribe in my app component to this behaviorSubject. Then when i click login the service needs to sends data through his behaviorSubject to the app as success message