import { TestBed } from '@angular/core/testing';

import { LibRestService } from './lib-rest.service';

describe('LibRestService', () => {
  let service: LibRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
