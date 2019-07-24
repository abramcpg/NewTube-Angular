import { Component } from '@angular/core';
import {User} from "./user/user";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to NewTube!';
  user = new User();


  constructor() {}


}