import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  capturedImage: string = ''; // 用于存储拍摄的照片

  constructor(public   photoService: PhotoService) {}

  ngOnInit() {}

  takePicture() {
    this.photoService.addNewToGallery();
    this.capturedImage = '';
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    // 这里可以编写你的逻辑来将照片添加到图库
  }
}
