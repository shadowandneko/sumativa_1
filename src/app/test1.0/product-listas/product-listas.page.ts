import { Component, OnInit } from '@angular/core';
import { productosQQ } from '../productos-qq.service';
import { ClProducto } from '../model/CllProducto';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalContentPage } from '../modal-content/modal-content.page';
import { UserService } from 'src/app/login2.0/user-service.service';
import { ClUser } from 'src/app/login2.0/modelss/user.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-listas',
  templateUrl: './product-listas.page.html',
  styleUrls: ['./product-listas.page.scss'],
})
export class ProductListasPage implements OnInit {
  products: ClProducto[] = [];
  user: ClUser | undefined;

  constructor(
    private productService: productosQQ,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private userService: UserService,
    private navCtrl: NavController // 导航控制器
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getLoggedInUser().subscribe((user: ClUser) => {
      this.user = user;
      this.loadProducts();
    });
  }

  loadProducts() {
    if (this.user) {
      const userEnfermedadPrefix = this.user.id + '-';

      this.productService.getProducts().subscribe((data) => {
        this.products = data
          
          .filter((product) => product.enfermedad.startsWith(userEnfermedadPrefix));
      });
    }
  }

  // 删除产品
  async deleteProduct(productId: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.productService.deleteProduct(productId).subscribe(() => {
              this.products = this.products.filter((product) => product.idProducto !== productId);
            });
          },
        },
      ],
    });

    await alert.present();
  }

  // 修改产品
  async openProductDetails(product: ClProducto) {
    const modal = await this.modalCtrl.create({
      component: ModalContentPage,
      componentProps: {
        product: product,
      },
    });
    return await modal.present();
  }

  goBack() {
    this.navCtrl.back(); // 返回上一个页面
  }
}