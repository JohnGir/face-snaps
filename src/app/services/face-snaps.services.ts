import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Aurus',
      description: 'Mon enfance reclame cette tendresse !',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snaps: 40,
      location: 'Assinie',
    },
    {
      id: 2,
      title: 'Doggie un bon dog',
      description: 'Mon compagnon fidèle !',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/04/05/18/19/art-7902101_960_720.jpg',
      snaps: 99,
      location: 'Bouaflé',
    },
    {
      id: 3,
      title: 'En cas food',
      description: 'La perfection se trouve dans les détails !',
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491__340.jpg',
      snaps: 101,
      location: 'Abidjan',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapsById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsanp'): void {
    const faceSnap = this.getFaceSnapsById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location: string;
  }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
    };
    this.faceSnaps.push(faceSnap);
  }
}
