import {Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AlertMessageService} from '../services/alert-message.service';
import {environment} from '../../../environments/environment';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;

  constructor(public alertMessageService: AlertMessageService, private dataService: DataService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    if (!request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 401) {
          this.token = '';
          this.router.navigate(['auth/login']);
        }
        this.alertMessageService.fail(error.status, error && error.error.reason ? error.error.reason : '');
        return throwError(error);
      }));
  }
}
