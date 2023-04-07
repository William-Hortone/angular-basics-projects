import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubmitFormService {
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable(); 

  
  // constructor( private SubmitFormService: SubmitFormService) { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

    handleService(): boolean {
      return true;
    }

    // onLogin() {
    //   // perform login logic here
    //   this.SubmitFormService.changeMessage('Login successful!');
    // }
}
