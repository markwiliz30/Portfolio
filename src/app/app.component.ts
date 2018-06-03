import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  aboutToggle = true;
  resumeToggle = true;
  portfolioToggle = false;
  contactToggle = true;

  homeCollapse() {
    this.aboutToggle = false;
    this.resumeToggle = true;
    this.portfolioToggle = true;
    this.contactToggle = true;
  }

  resumeCollapse() {
    this.aboutToggle = true;
    this.resumeToggle = false;
    this.portfolioToggle = true;
    this.contactToggle = true;
  }

  seminarsCollapse() {
    this.aboutToggle = true;
    this.resumeToggle = true;
    this.portfolioToggle = false;
    this.contactToggle = true;
  }

  contactCollapse() {
    this.aboutToggle = true;
    this.resumeToggle = true;
    this.portfolioToggle = true;
    this.contactToggle = false;
  }
}

