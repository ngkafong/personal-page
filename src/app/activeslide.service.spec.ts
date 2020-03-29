import { TestBed } from '@angular/core/testing';

import { ActiveslideService } from './activeslide.service';

describe('ActiveslideService', () => {
  let service: ActiveslideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveslideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
