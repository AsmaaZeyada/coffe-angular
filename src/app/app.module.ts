import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './menu/card/card.component';
import { CardService } from './Services/card.service';
import { ImagesComponent } from './images/images.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewComponent } from './ratings/review/review.component';
import { ReviewService } from './Services/review.service';
import { StarsComponent } from './stars/stars.component';
import { StatsService } from './Services/stats.service';
import { StatsComponent } from './stats/stats.component';
import { ServeforyouComponent } from './serveforyou/serveforyou.component';
import { ServecardComponent } from './serveforyou/servecard/servecard.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    CardComponent,
    ImagesComponent,
    RatingsComponent,
    ReviewComponent,
    StarsComponent,
    StatsComponent,
    ServeforyouComponent,
    ServecardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [CardService, ReviewService, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
