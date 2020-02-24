import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/interceptor/auth.interceptor';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
    ],
    declarations: [AuthComponent],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ]
})
export class AuthModule {
}
