import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Cloudinary module
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular';
import { Cloudinary } from 'cloudinary-core';

import { AppComponent }  from './app.component';


const cloudinaryLib = {
  Cloudinary: Cloudinary
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
		CloudinaryModule.forRoot(cloudinaryLib, {
      cloud_name: 'demo'
    } as CloudinaryConfiguration),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
