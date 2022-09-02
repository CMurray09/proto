import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: {email: string, password: string} = {
    email: '',
    password: ''
  }

  constructor(private route: Router) { }

  ngOnInit(): void {}

  async login(): Promise<void> {
    // Decided to redirect the user to the homepage after 'logging in'
    await this.route.navigate(['/']);
  }

}
