import { TestBed } from '@angular/core/testing';

import { LiveapiService } from './liveapi.service';

describe('LiveapiService', () => {
  let service: LiveapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
