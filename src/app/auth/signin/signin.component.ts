import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  signIn(email: string, password : string){
    this.authService.signIn(email,password);
  }

}
