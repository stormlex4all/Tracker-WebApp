import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { TrackerDataComponent } from './components/tracker-data/tracker-data.component';
import {PanelModule} from 'primeng/panel';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    TrackerDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZDC6DRFHUAHHC6p1OsiHSJmmb3PJttFI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
