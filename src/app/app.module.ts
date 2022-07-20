import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG, HAMMER_LOADER } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import * as Hammer from 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PrototypesPageComponent } from './pages/prototypes-page/prototypes-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { VideosGridviewComponent } from './components/videos-gridview/videos-gridview.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    override overrides = <any> {
        pan: { direction: Hammer.DIRECTION_VERTICAL, threshold: 0 },
        swipe: { direction: Hammer.DIRECTION_VERTICAL, threshold: 0 },
    }
}

@NgModule({
    declarations: [
        AppComponent,
        PortfolioPageComponent,
        PrototypesPageComponent,
        AboutPageComponent,
        ContactPageComponent,
        VideosGridviewComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        BrowserAnimationsModule,
        HammerModule
    ],
    providers: [
        {
            provide: HAMMER_LOADER,
            useValue: async () => {
                return import("hammerjs");
            }
        },
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
