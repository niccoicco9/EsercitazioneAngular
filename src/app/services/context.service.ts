import { Injectable } from '@angular/core';
import { ModelloHeader } from '../models/modelloHeader';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContextService {
  // Ricordati quando definisci il modello in un servizio devi andare a creare la variabile
  // come proprietà del servizio
  private elementiPerHeader: ModelloHeader;
  private numeroNotifiche = Math.floor(Math.random() * 100);
  private URL_JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com';
  private UTENTE = 1;

  constructor() {
    this.elementiPerHeader = new ModelloHeader('Alessandro', 26, true);
  }

  getUtente(): number {
    return this.UTENTE;
  }

  getUrlJsonPlaceholder(): string {
    return this.URL_JSONPLACEHOLDER;
  }

  getNome(): Observable<string> {
    return of(this.elementiPerHeader.nome);
  }

  getAnni(): Observable<number> {
    return of(this.elementiPerHeader.anni);
  }

  getFatto(): Observable<boolean> {
    return of(this.elementiPerHeader.fatto);
  }

  getNumeroNotifiche(): Observable<number> {
    return of(this.numeroNotifiche);
  }

  setNome(nome: string): void {
    this.elementiPerHeader.nome = nome;
  }

  setAnni(anni: number): void {
    this.elementiPerHeader.anni = anni;
  }

  setFatto(fatto: boolean): void {
    this.elementiPerHeader.fatto = fatto;
  }

  private incrementaNotifiche(): void {
    this.numeroNotifiche++;
  }

}
