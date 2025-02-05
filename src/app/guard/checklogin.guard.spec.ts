import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkloginGuard } from './checklogin.guard';

describe('checkloginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkloginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
