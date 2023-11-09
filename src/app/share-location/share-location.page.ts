import { ModalController, AlertController } from '@ionic/angular';
import { OtherViewPage } from '../other-view/other-view.page';
import { ContactService, Contact } from '../contact.service';
import { ContactListPage } from '../contact-list/contact-list.page'; 
import { Router } from '@angular/router';
import { MapService } from '../map/map.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../login2.0/user-service.service';

@Component({
  selector: 'app-share-location',
  templateUrl: './share-location.page.html',
  styleUrls: ['./share-location.page.scss'],
})
export class ShareLocationPage implements OnInit {
  loggedInUserData: any;
  contacts: Contact[] = [];
  currentLatitude: number = 0;
  currentLongitude: number = 0;

  @ViewChild('mapElement', { static: true }) mapElement: ElementRef | undefined;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private contactService: ContactService,
    private router: Router,
    private mapService: MapService,
    private userService: UserService
  ) {}

  async openAddContactModal() {
    try {
      const modal = await this.modalController.create({
        component: OtherViewPage,
      });
      await modal.present();
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  }

  async showContactList() {
    try {
      const modal = await this.modalController.create({
        component: ContactListPage,
      });
      await modal.present();
    } catch (error) {
      console.error('Error opening contact list modal:', error);
    }
  }

  async ngOnInit() {
    if (this.mapElement) {
      const mapElement = this.mapElement.nativeElement;

      try {
        await this.mapService.initializeMap(mapElement);
        const currentPosition = await this.mapService.getCurrentPosition();

        if (currentPosition) {
          this.currentLatitude = currentPosition.coords.latitude;
          this.currentLongitude = currentPosition.coords.longitude;
          this.mapService.addMarkerToMap(
            this.currentLatitude,
            this.currentLongitude,
            'Your Location'
          );
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }

    // 获取已登录用户信息
    this.userService.getLoggedInUser().subscribe(user => {
      this.loggedInUserData = user;
    });
  }

  cerra() {
    this.router.navigate(['/login']);
  }

  person() {
    this.router.navigate(['/person']);
  }
  navigateToProductCreate() {
    this.router.navigate(['/product-create']);
  }
  navigateToPersonList() {
    this.router.navigate(['/product-listas']); // 这里的 'person-list' 应该是你的 Person List 页面的路由路径
  }
  Camara() {
    this.router.navigate(['/camera']);
  }
  login() {
    this.router.navigate(['/login']);
  }
}
