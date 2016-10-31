/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserAuthStatusService } from './user-auth-status.service';

describe('Service: UserAuthStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthStatusService]
    });
  });

  it('should ...', inject([UserAuthStatusService], (service: UserAuthStatusService) => {
    expect(service).toBeTruthy();
  }));
});
