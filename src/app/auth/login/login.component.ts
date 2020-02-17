import {Component, OnInit} from '@angular/core';
import {LoginModel} from './login.model';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';

/**
 * this component is for handling verify-code-request related tasks
 */
@Component({
  selector: 'app-verify-code-request',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token;
  loginForm: LoginModel = new LoginModel({});
  date;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onLogin() {
    this.authenticationService.login(`auth/login?username=${this.loginForm.username}&password=${this.loginForm.password}`).subscribe(
      (result => {
        localStorage.setItem('token', result.data);
        // this.router.navigate(['/landing-page']);
      })
    );
  }
}
