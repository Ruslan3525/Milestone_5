import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QwertyComponent } from './qwerty/qwerty.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user-service.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';

const routes: Routes = [{path:'' ,component:QwertyComponent},{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent},{
  path: 'users', component: UsersComponent

},{
  path: 'home', component: HomeComponent
},
{
  path: 'quiz', component: QuizComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    QwertyComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    QuizComponent,
    BackgroundDirective,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
