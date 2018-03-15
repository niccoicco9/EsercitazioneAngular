import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MessaggisticaService {
  private messaggi: string[] = [];

  constructor() {}

  getMessaggio(): Observable<string[]> {
    return of(this.messaggi);
  }

  setMessaggio(messaggio: string): void {
    this.messaggi.push(messaggio);
  }

  pulisciListaMessaggi() {
    this.messaggi = [];
  }
}
