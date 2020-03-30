import { personal-pageBed } from '@angular/core/personal-pageing';

import { ActiveslideService } from './activeslide.service';

describe('ActiveslideService', () => {
  let service: ActiveslideService;

  beforeEach(() => {
    personal-pageBed.configurepersonal-pageingModule({});
    service = personal-pageBed.inject(ActiveslideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
