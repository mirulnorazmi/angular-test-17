import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { NgOtpInputModule } from 'ng-otp-input';
import { AppbarComponent } from './component/appbar/appbar.component';
import { LoginComponent } from './PAGES/login/login.component';
import { DashboardComponent } from './PAGES/dashboard/dashboard.component';

@NgModule({
  declarations: [
    // Component
    AppbarComponent,
    // App Component
    AppComponent,
    // Pages
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    // AngularFireModule.initializeApp(environment.firebase),  
    NgOtpInputModule,  
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
