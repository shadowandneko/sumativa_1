import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.page.html',
  styleUrls: ['./lost.page.scss'],
})
export class LostPage {

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']); // 导航到登录页面的路由路径
  }
}
