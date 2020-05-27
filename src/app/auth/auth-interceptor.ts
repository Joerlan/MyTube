import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

//this interceptor bind the request and add a token to authorization header
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if(token){
      console.log("AuthInterceptor: we have header");
      const authRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer "+token)
      });
      return next.handle(authRequest);
    }
    console.log("AuthInterceptor: we don't have header");
    return next.handle(req);
  }

}
