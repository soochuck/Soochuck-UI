import { TestBed } from '@angular/core/testing';

import { ValidateLogonServiceService } from './validate-logon-service.service';

describe('ValidateLogonServiceService', () => {
  let service: ValidateLogonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateLogonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
