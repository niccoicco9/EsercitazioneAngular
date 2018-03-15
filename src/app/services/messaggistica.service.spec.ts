import { TestBed, inject } from '@angular/core/testing';

import { MessaggisticaService } from './messaggistica.service';

describe('MessaggisticaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessaggisticaService]
    });
  });

  it('should be created', inject([MessaggisticaService], (service: MessaggisticaService) => {
    expect(service).toBeTruthy();
  }));
});
