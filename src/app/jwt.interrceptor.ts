import {  HttpInterceptorFn } from "@angular/common/http";

export const jwtInterceptor:HttpInterceptorFn =(req: any,next: any)=> {
    const token = localStorage.getItem('token');    
    console.log('JWT Interceptor - Token:', req.url);
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next(req);

}
