import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonCheckbox,RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption ],
})
export class HomePage {
  constructor() {}
}
