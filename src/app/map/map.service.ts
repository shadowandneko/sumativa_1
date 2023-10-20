import { Injectable } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private apiKey: string = 'AIzaSyAbBUI4NYtxMFDCOlq2Bky6cvrnIiiPqic';
  private map: any;

  constructor() {}

  // 初始化地图
  async initializeMap(mapElement: HTMLElement) {
    const currentPosition = await this.getCurrentPosition();

    if (!this.map) {
      this.map = await GoogleMap.create({
        id: 'my-map',
        element: mapElement,
        apiKey: this.apiKey,
        config: {
          center: {
            lat: currentPosition.coords.latitude,
            lng: currentPosition.coords.longitude,
          },
          zoom: 15,
        },
      });
    }
  }

  // 添加标记到地图
  async addMarkerToMap(latitude: number, longitude: number, title: string) {
    if (this.map) {
      await this.map.addMarker({
        coordinate: {
          lat: latitude,
          lng: longitude,
        },
        title: title,
      });
    }
  }

  // 获取用户的当前位置
  async getCurrentPosition(): Promise<GeolocationPosition> {
    const currentPosition = await Geolocation.getCurrentPosition();
    return currentPosition;
  }
}
