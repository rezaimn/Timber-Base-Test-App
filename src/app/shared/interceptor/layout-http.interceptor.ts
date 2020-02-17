import {Injectable} from '@angular/core';

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AlertMessageService} from '../services/alert-message.service';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class LayoutHttpInterceptor implements HttpInterceptor {
  token;

  constructor(public alertMessageService: AlertMessageService,
              private dataService: DataService,
              private translate: TranslateService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    request = request.clone({headers: request.headers.set('X-Auth-Token', this.token)});
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (request.method === 'POST') {
            // this.alertMessageService.success('عملیات موفق', 'عملیات ثبت موفقیت آمیز بود.');
          }
          if (request.method === 'PUT' || request.method === 'PATCH') {
            // this.alertMessageService.success('عملیات موفق', 'عملیات بروزرسانی موفقیت آمیز بود.');
          }
          if (request.method === 'DELETE') {
            // this.alertMessageService.success('عملیات موفق', 'عملیات حذف موفقیت آمیز بود.');
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let message = '';
        if (error.status === 403 || error.status === 401) {
          this.token = '';
          this.router.navigate(['auth/login']);
        } else if (error.status === 406) {
          this.alertMessageService.fail(error.status, error.error.error.data);
        } else {
          this.translate.get('shared.messages.server-error').subscribe(
            (result => {
              message = result;
            })
          );
          this.alertMessageService.fail(error.status, message);
        }

        return throwError(error);
      }));
  }
}
