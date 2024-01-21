import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { SobreMiComponent } from "./components/sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

const appRoutes: Routes = [
    { path: "", component: InicioComponent},
    { path: "sobre-mi", component: SobreMiComponent},
    { path: "mis-proyectos", component: ProyectosComponent},
    { path: "contacto", component: ContactoComponent},
    { path: "**", component: ErrorPageComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);