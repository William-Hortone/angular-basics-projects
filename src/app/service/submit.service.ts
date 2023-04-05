import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {
    handleService(formData:any): boolean {
      return true;
    }
}
