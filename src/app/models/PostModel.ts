import { Comment } from './CommentModel';

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: Comment[];

    constructor(userId: number, title: string, body: string, id: number) {
        this.userId = userId;
        this.title = title;
        this.body = body;
        this.id = id;
    }

    aggiungiCommenti(comments: Comment[]) {
        this.comments = comments.filter(comment => comment.postId === this.id);
    }

}
