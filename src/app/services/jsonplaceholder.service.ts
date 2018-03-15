import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Post } from '../models/PostModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContextService } from './context.service';
import { Album } from '../models/AlbumModel';
import { Photo } from '../models/PhotosModel';
import { Comment } from '../models/CommentModel';
import { Utente } from '../models/UtenteModels';

@Injectable()
export class JsonplaceholderService {
  private RELATIVE_USER = '/users';
  private RELATIVE_POST = '/posts';
  private RELATIVE_COMMENT = '/comments';
  private RELATIVE_ALBUMS = '/albums';
  private RELATIVE_PHOTOS = '/photos';
  private HTTP_OPTION = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })};
  private utente: Utente;
  private posts: Post[];
  private albums: Album[];
  private comments: Comment[];
  private fotos: Photo[];

  constructor(private context: ContextService, private http: HttpClient) { }

  getPosts(idUser: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.context.getUrlJsonPlaceholder()}${this.RELATIVE_POST}?userId=${idUser}`);
  }

  getAlbums(idUser: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.context.getUrlJsonPlaceholder()}${this.RELATIVE_ALBUMS}?userId=${idUser}`);
  }

  getAllPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.context.getUrlJsonPlaceholder()}${this.RELATIVE_PHOTOS}`);
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.context.getUrlJsonPlaceholder()}${this.RELATIVE_COMMENT}`);
  }

  sendNewPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.context.getUrlJsonPlaceholder()}${this.RELATIVE_POST}`, newPost, this.HTTP_OPTION);
  }

  creaUtente(idUser: number): Utente {
    this.getAllComments().subscribe(comments => this.comments = comments);
    this.getAllPhotos().subscribe(photos => this.fotos = photos);

    this.utente = new Utente(idUser);
    this.getPosts(idUser).subscribe(posts => {
      posts.forEach(post => post.aggiungiCommenti(this.comments));
      this.utente.setPosts(posts);
    });
    this.getAlbums(idUser).subscribe(albums => {
      this.utente.setAlbums(albums);
    });
    return this.utente;
  }
}
