import { CanActivateFn } from '@angular/router';

export const universalGuard: CanActivateFn = (route, state) => {
  
  return sessionStorage.getItem("jwt")==null?false:true;
};
