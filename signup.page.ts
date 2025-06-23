import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCheckbox, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonLabel, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SignupPage implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}

  signupForm!: FormGroup
formBuilder = inject(FormBuilder)

  constructor() {
    this.signupForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
   }

  ngOnInit() {
  }

}
