import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContextService } from './services/context.service';
import { BodyComponent } from './body/body.component';
import { MessaggisticaService } from './services/messaggistica.service';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { HomeComponent } from './home/home.component';
import { NuovoPostComponent } from './nuovo-post/nuovo-post.component';
import { MenuNavigazioneComponent } from './menu-navigazione/menu-navigazione.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    NuovoPostComponent,
    MenuNavigazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContextService, MessaggisticaService, JsonplaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
