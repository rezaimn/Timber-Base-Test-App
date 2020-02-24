import {Component, OnInit} from '@angular/core';
import {LoginModel} from './login.model';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';

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
    private router: Router,
    private dataService:DataService
  ) {

  }

  ngOnInit(): void {
  }

  onLogin() {
    this.authenticationService.login(`auth/login?username=${this.loginForm.username}&password=${this.loginForm.password}`).subscribe(
      (result => {
        localStorage.setItem('token', result.data);
        const userData={
          address:'Hoseyni St. No.345, Tehran, Tehran, Iran,2344543532',
          phone:'+989352308547',
          email:'mohammadrezaimn@gmail.com',
          firstName:'Mohammadreza',
          lastName:'Imani',
          website:'www.test.com'
        }
        localStorage.setItem('userData', JSON.stringify(userData));

        // this.router.navigate(['/landing-page']);
      })
    );
  }
}
