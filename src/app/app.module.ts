import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdvertisementDialog, AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { BannerModule } from './banner/banner.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ProductsModule } from './products/products.module';
import { ContactUsModule } from './contact-us/contact-us.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    BannerModule,
    AboutUsModule,
    ProductsModule,
    ContactUsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
