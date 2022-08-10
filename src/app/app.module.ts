import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LeftnavComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
