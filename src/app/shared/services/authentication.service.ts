import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

/**
 * @ignore
 */
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    /**
     * @ignore
     */
    constructor(private http: HttpClient) {
    }


    /**
     * it adds the input url to the base URL
     */
    setUrl(url: string) {
        return environment.baseUrl + url;
    }

    /**
     * here we specify that verify-code-request is a post request that accepts 2 arguments (url,body)
     */
    login(url: string): Observable<any> {
        return this.http.post(this.setUrl(url), null).pipe(
            tap(
                (res: any) => {

                },
                (error: any) => {

                }
            )
        );
    }



}
