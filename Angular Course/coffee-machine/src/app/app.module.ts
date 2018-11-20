import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MachineModule } from './body-button/body-button.module';

import { AppComponent } from './app.component';
import { BodyButtonComponent } from './body-button/body-button.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MachineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
