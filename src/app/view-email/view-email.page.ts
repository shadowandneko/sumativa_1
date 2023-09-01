import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-email',
  templateUrl: 'view-email.page.html',
  styleUrls: ['view-email.page.scss']
})
export class ViewEmailPage {
  email: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async sendEmail() {
    // Simulate sending email (you can add actual email sending logic here)

    // Show success alert
    const alert = await this.alertController.create({
      header: 'Email Sent',
      message: 'Password reset email has been sent.',
      buttons: ['OK']
    });

    await alert.present();

    // Wait for the alert to be dismissed
    await alert.onDidDismiss();

    // Navigate to login page
    this.router.navigateByUrl('/login');
  }
}
