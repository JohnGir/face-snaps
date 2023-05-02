import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../core/models/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap: FaceSnap;

  buttonText: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsanp');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnaps() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
