import { Post } from './PostModel';
import { Album } from './AlbumModel';
import { Comment } from './CommentModel';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

export class Utente {
    private idUtente: number;
    private posts: Post[];
    private albums: Album[];


    constructor(idUtente: number) {
        this.idUtente = idUtente;
    }

    getUtente(): number {
        return this.idUtente;
    }

    setPosts(posts: Post[]): void {
        this.posts = posts;
    }

    setAlbums(albums: Album[]): void {
        this.albums = albums;
    }

    setComments(comments: Comment[]): void {
        console.log(comments);
        /*this.posts.forEach(post => {
            post.aggiungiCommenti(comments);
            console.log(post);
        });*/
        for (let i = 0; i < this.posts.length; i++) {
            this.posts[i].aggiungiCommenti(comments);
        }
    }
}

