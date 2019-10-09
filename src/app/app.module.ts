import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './our-service/our-service.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, NavigationComponent, OurServiceComponent ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
