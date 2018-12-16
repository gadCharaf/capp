import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-cartographie';


  constructor() {
    const config = {
      apiKey: 'AIzaSyACbU-6J7gbGCwH3ArafKDMPGL51t_fxcE',
      authDomain: 'carthographie-50807.firebaseapp.com',
      databaseURL: 'https://carthographie-50807.firebaseio.com',
      projectId: 'carthographie-50807',
      storageBucket: '',
      messagingSenderId: '305292977884'
    };
    firebase.initializeApp(config);
  }
}
