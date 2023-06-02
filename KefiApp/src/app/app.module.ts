import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivationComponent } from './components/activation/activation.component';
import { ConfigComponent } from './components/config/config.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestDialogComponent } from './components/rest-dialog/rest-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    ActivationComponent,
    ConfigComponent,
    AlertComponent,
    RestDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
