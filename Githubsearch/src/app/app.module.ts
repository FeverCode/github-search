import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './profile.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkHighlighterDirective } from './link-highlighter.directive';
import { ResultComponent } from './result/result.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    NavbarComponent,
    LinkHighlighterDirective,
    ResultComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
