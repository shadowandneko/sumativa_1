import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
  ) {}

  async login() {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (this.username === userData.username && this.password === userData.password) {
        // Successful login
        await this.showLoginSuccessAlert();

        // Store the username in local storage
        localStorage.setItem('loggedInUsername', this.username);

        this.router.navigateByUrl('/share-location'); // Redirect to user page (e.g., /share-location)
      } else {
        await this.showLoginErrorAlert();
      }
    } else {
      await this.showLoginErrorAlert();
    }
  }

  async showLoginSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Login Success',
      message: 'You have successfully logged in!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Invalid username or password.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async resetPassword() {
    this.router.navigateByUrl('/view-email');
  }
}
