import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PrototypesPageComponent } from './pages/prototypes-page/prototypes-page.component';

const routes: Routes = [
    { path: "", redirectTo: "portfolio", pathMatch: "full" },
    { path: "portfolio", component: PortfolioPageComponent, data: { state: "portfolio" } },
    { path: "prototypes", component: PrototypesPageComponent, data: { state: "prototypes" } },
    { path: "about", component: AboutPageComponent, data: { state: "about" } },
    { path: "contact", component: ContactPageComponent, data: { state: "contact" } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
