import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // might inject some type of authservice here for token
  /*
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  */
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header (fake value is shown here)
    // this.authService.getAuthToken();
    const authHeader = '49a5kdkv409fd39';
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader)
    });

    return next.handle(authReq);
  }
}
