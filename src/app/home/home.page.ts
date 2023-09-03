import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  constructor(private router: Router) {}

  ngOnInit() {
    const typingEffect = document.querySelector('.typing-effect');
    const spans = typingEffect?.querySelectorAll('span');

    if (spans) {
      spans.forEach((span, index) => {
        span.style.setProperty('--char-index', index.toString());
      });
    }

    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 3000);
  }
}
