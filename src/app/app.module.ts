import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { ProyectoModalComponent } from './proyecto-modal/proyecto-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    SidebarComponent,
    InicioComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    ProyectoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightboxModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    { provide: 'EmailJsService', useValue: emailjs },
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
