import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: UserModel = new UserModel({});

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigate(['/auth/login']);
  }
}
