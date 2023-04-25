import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubmitFormService {

  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable(); 

  // ! Method to update the behaviorSubject
  changeMessage(message: string) {
    this.messageSource.next(message);
    // ! we use the ' next ' method to update the message 
  }

    handleService(): boolean {
      return true;
    }

}
