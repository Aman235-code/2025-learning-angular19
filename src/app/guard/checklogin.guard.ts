import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkloginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogged = localStorage.getItem('angularindiUser');
  if (isLogged != null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
