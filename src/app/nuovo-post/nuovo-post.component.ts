import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { Post } from '../models/PostModel';

@Component({
  selector: 'app-nuovo-post',
  templateUrl: './nuovo-post.component.html',
  styleUrls: ['./nuovo-post.component.scss']
})
export class NuovoPostComponent implements OnInit {
  nuovoPost: Post;

  constructor(private context: ContextService, private servizioJson: JsonplaceholderService) {
    this.nuovoPost = new Post(this.context.getUtente(), '', '', 0);
  }

  ngOnInit() {
  }

  inviaNuovoPost() {
    this.servizioJson.sendNewPost(this.nuovoPost).subscribe(
      risultato => alert('Inserimento eseguito'),
      error => alert(error.message));
  }
}
