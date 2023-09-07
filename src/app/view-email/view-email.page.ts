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
    // 验证邮箱是否包含@
    if (!this.email.includes('@')) {
      const alert = await this.alertController.create({
        header: 'Email Validation Error',
        message: 'Please enter a valid email address.',
        buttons: ['OK']
      });

      await alert.present();
      return; // 邮箱格式不正确，停止继续执行
    }

    // 邮箱格式正确，继续发送邮件的逻辑
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

  goToLoginPage() {
    // 使用Router导航到登录页面
    this.router.navigate(['/login']); // '/login' 是您的登录页面的路由路径
  }
}
