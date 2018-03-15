import { Component } from '@angular/core';
import { ModelloHeader } from './models/modelloHeader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  datiModello: ModelloHeader;
  cognome: string;

  funzionePropagazione(datiInArrivo: ModelloHeader) {
    this.datiModello = datiInArrivo;
  }

  funzionePropagazioneCognome(cognome: string) {
    this.cognome = cognome;
  }
}
