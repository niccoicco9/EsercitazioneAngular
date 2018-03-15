import { Photo } from './PhotosModel';

export interface Album {
    userId: number;
    id: number;
    title: string;
}

/*export class Album {
    private userId: number;
    private id: number;
    private title: string;
    private fotografie: Photo[];

    constructor(userId: number, id: number, title: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
    }

    inserisciFoto(fotografie: Photo[]) {
        fotografie.forEach(fotografia => {
            if (fotografia.albumId === this.id) {
                this.fotografie.push(fotografia);
            }
        });
    }
}*/
