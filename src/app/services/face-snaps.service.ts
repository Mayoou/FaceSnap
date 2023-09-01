import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: "Marseille",
            description: "L'OM, la ferveur de tout un peuple",
            imageUrl: 'https://www.wonderbox.fr/blog/wp-content/uploads/sites/4/2020/02/Visiter-Marseille-en-10-lieux-marseille-scaled-1-1.jpeg',
            createdDate: new Date(),
            snaps: 13,
            location: 'Marseille'
        },
        {   
            id: 2,
            title: "Le Velodrome",
            description: "Le plus beau des stades !",
            imageUrl: "https://madeinmarseille.net/actualites-marseille/342905766_1042999003783570_2591143757740057141_n.jpg",
            createdDate: new Date(),
            snaps: 278,
            location: 'Le Paradis'
        },
        {
            id:3,
            title: "Le Frioul",
            description: "Au large de Marseille, dans le 7ème arrondissement",
            imageUrl: "https://www.altituderando.com/local/cache-vignettes/L1200xH675/randoon12976-8dc47.jpg",
            createdDate: new Date(),
            snaps: 56
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}