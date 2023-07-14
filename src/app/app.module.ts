import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadcarouselComponent } from './headcarousel/headcarousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [					
    AppComponent,
    NavComponent,
      HeadcarouselComponent,
      FooterComponent,
      HomeBodyComponent,
      CategoriesPageComponent,
      MainPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
