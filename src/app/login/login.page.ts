import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../login2.0/user-service.service';
import { ClUser } from '../login2.0/modelss/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private userService: UserService
  ) {}

  // 登录方法
  async login() {
    this.userService.getUsers().subscribe((users: ClUser[]) => {
      const user = users.find((user) => user.username === this.username && user.password === this.password);
      
      if (user) {
        this.userService.setLoggedInUser(user); // 将登录的用户存储在UserService中

        this.showLoginSuccessAlert();
        localStorage.setItem('loggedInUsername', this.username);
        this.router.navigateByUrl('/share-location'); // 重定向到用户页面（例如：/share-location）
      } else {
        this.showLoginErrorAlert();
      }
    });
  }

  // 显示登录成功的警报
  async showLoginSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Login Success',
      message: 'You have successfully logged in!',
      buttons: ['OK']
    });
    await alert.present();
  }

  // 显示登录错误的警报
  async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Invalid username or password.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // 重置密码
  resetPassword() {
    this.router.navigateByUrl('/view-email');
  }
}