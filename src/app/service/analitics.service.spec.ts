import { TestBed, inject } from '@angular/core/testing';

import { AnaliticsService } from './analitics.service';

describe('AnaliticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnaliticsService]
    });
  });

  it('should be created', inject([AnaliticsService], (service: AnaliticsService) => {
    expect(service).toBeTruthy();
  }));
});
