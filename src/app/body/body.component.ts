import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelloHeader } from '../models/modelloHeader';
import { MessaggisticaService } from '../services/messaggistica.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() datiPersona: ModelloHeader;
  @Output() cognomeEmitter: EventEmitter<string> = new EventEmitter();

  cognome: string;
  elencoMessaggi: string[];

  constructor(private messaggi: MessaggisticaService) { }

  ngOnInit() {
    this.cognomeEmitter.emit(this.cognome);
    this.messaggi.setMessaggio('Sono in ngOnInit di Body');
    this.messaggi.getMessaggio().subscribe(messages => {
      this.elencoMessaggi = messages;
    });
  }
}
