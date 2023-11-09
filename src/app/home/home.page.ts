import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const shouldDisplayInfo = true; // Replace this with your condition

    if (shouldDisplayInfo) {
      this.router.navigate([{ outlets: { info: ['info'] } }]);
    }

    const typingEffect = document.querySelector('.typing-effect');
    const spans = typingEffect?.querySelectorAll('span');

    if (spans) {
      spans.forEach((span, index) => {
        span.style.setProperty('--char-index', index.toString());
      });
    }

    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 4000);
  }
}
