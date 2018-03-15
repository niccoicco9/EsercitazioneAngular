import { TestBed, inject } from '@angular/core/testing';

import { CostruisciUtenteService } from './costruisci-utente.service';

describe('CostruisciUtenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CostruisciUtenteService]
    });
  });

  it('should be created', inject([CostruisciUtenteService], (service: CostruisciUtenteService) => {
    expect(service).toBeTruthy();
  }));
});
