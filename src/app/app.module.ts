import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechWorldModalComponent } from './tech-world-modal/tech-world-modal.component';
import { TechCityModalComponent } from './tech-city-modal/tech-city-modal.component';
import { TechServiceModalComponent } from './tech-service-modal/tech-service-modal.component';
import { TechGuideModalComponent } from './tech-guide-modal/tech-guide-modal.component';
import { TechBlogModalComponent } from './tech-blog-modal/tech-blog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TechWorldModalComponent,
    TechCityModalComponent,
    TechServiceModalComponent,
    TechGuideModalComponent,
    TechBlogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
