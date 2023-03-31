import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { TodoDetailsComponent } from './pages/todos/todo-details/todo-details.component';
import { CreateTodoComponent } from './pages/todos/create-todo/create-todo.component';
import { DataListComponent } from './shared/components/data-list/data-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    TodosComponent,
    NotFoundComponent,
    TodosListComponent,
    TodoDetailsComponent,
    CreateTodoComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
