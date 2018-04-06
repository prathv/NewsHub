import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataOpService } from './data-op.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { SessionService } from './session.service';
import { DetailsavedComponent } from './detailsaved/detailsaved.component';
import {NavbarServiceService} from './navbar-service.service';

const appRoutes: Routes = [
{
  path:'login' , component: LoginComponent
},
{
  path: '', redirectTo:'/login',pathMatch:'full'
},
{
path: 'register', component: RegisterComponent
},
{
path: 'home', component: HomeScreenComponent
},
{
path: 'detailed/:source', component: DetailedViewComponent
},
{
path: 'saveddetailed', component: DetailsavedComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HomeScreenComponent,
    DetailedViewComponent,
    DetailsavedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataOpService,SessionService,NavbarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
