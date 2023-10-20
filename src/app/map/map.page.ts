import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapService } from './map.service';
import { GeolocationPosition } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  // 使用ViewChild来引用HTML元素
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef | undefined;
  currentLatitude: number | null = null;
  currentLongitude: number | null = null;

  constructor(private mapService: MapService) {}

  async ngOnInit() {
    // 检查是否有引用到地图元素
    if (this.mapElement) {
      const mapElement = this.mapElement.nativeElement;

      try {
        // 初始化地图
        await this.mapService.initializeMap(mapElement);

        // 获取用户的当前位置
        const currentPosition = await this.mapService.getCurrentPosition();

        if (currentPosition) {
          // 将当前纬度和经度传递给HTML模板
          this.currentLatitude = currentPosition.coords.latitude;
          this.currentLongitude = currentPosition.coords.longitude;

          // 在地图上添加用户当前位置的标记
          this.mapService.addMarkerToMap(
            currentPosition.coords.latitude,
            currentPosition.coords.longitude,
            'Your Location'
          );
        } else {
          console.error('Failed to get current position.');
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }
  }
}
