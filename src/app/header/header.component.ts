import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContextService } from '../services/context.service';
import { ModelloHeader } from '../models/modelloHeader';
import { MessaggisticaService } from '../services/messaggistica.service';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { Album } from '../models/AlbumModel';
import { Photo } from '../models/PhotosModel';
import { Post } from '../models/PostModel';
import { Utente } from '../models/UtenteModels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() datiCognome: string;

  // Mi permette di propagare l'informazione al livello superiore (app component)
  @Output() emitter: EventEmitter<ModelloHeader> = new EventEmitter();
  arrayStringhe = ['Uno', 'Due', 'Tre', 'Quattro', 'Cinque', 'Sei', 'Sette'];
  informazioniPersona: ModelloHeader;
  albums: Album[];
  posts: Post[];
  utente: Utente;

  notifiche = 0;
  numeroCommenti = 0;
  numeroAlbums = 0;
  numeroFotografie = 0;

  constructor(
    private context: ContextService,
    private messaggi: MessaggisticaService,
    private jsonplaceholder: JsonplaceholderService
  ) {
    this.informazioniPersona = new ModelloHeader('', 0, true);
  }

  ngOnInit() {
    this.inizializzaContesto();
    this.inizializzaContatoriSocial();
    this.emitter.emit(this.informazioniPersona);
    this.messaggi.setMessaggio('Sono in ngOnInit di header');
    this.utente = this.jsonplaceholder.creaUtente(this.context.getUtente());
    console.log(this.utente);
  }

  cambiaValoreVariabileFatto() {
    this.messaggi.setMessaggio('Sono in cambiaValoreVariabileFatto di header');
    this.informazioniPersona.fatto = !this.informazioniPersona.fatto;
  }

  private inizializzaContesto(): void {
    this.context.getNome().subscribe(nome => {
      this.informazioniPersona.nome = nome;
    });
    this.context.getAnni().subscribe(anni => {
      this.informazioniPersona.anni = anni;
    });
    this.context.getFatto().subscribe(fatto => {
      this.informazioniPersona.fatto = fatto;
    });
  }

  private inizializzaContatoriSocial() {
    this.jsonplaceholder.getPosts(this.context.getUtente()).subscribe(posts => {
      this.posts = posts;
      this.notifiche = posts.length;
    });
    this.jsonplaceholder.getAlbums(this.context.getUtente()).subscribe(albums => {
      this.albums = albums;
      this.numeroAlbums = albums.length;
    });

    // Possiamo provare con un forEach più tardi
    this.jsonplaceholder.getAllPhotos().subscribe(fotografie => {
      for (let i = 0; i < this.albums.length; i++) {
        for (let j = 0; j < fotografie.length; j++) {
          if (this.albums[i].id === fotografie[j].albumId) {
            this.numeroFotografie++;
          }
        }
      }
    });

    // Possiamo provare con un forEach più tardi
    this.jsonplaceholder.getAllComments().subscribe(commenti => {
      for (let i = 0; i < this.posts.length; i++) {
        for (let j = 0; j < commenti.length; j++) {
          if (this.posts[i].id === commenti[j].postId) {
            this.numeroCommenti++;
          }
        }
      }
    });
  }
}
