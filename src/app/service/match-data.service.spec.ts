import { TestBed, inject } from '@angular/core/testing';

import { MatchDataProviderService } from './match-data-provider.service';

describe('MatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchDataProviderService]
    });
  });

  it('should be created', inject([MatchDataProviderService], (service: MatchDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
