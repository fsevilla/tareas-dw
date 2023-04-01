import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './modules/auth/auth.guard';
import { UnauthGuard } from './modules/auth/unauth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateTodoComponent } from './pages/todos/create-todo/create-todo.component';
import { TodoDetailsComponent } from './pages/todos/todo-details/todo-details.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] , children: [
    { path: '', component: TodosListComponent },
    { path: 'new', component: CreateTodoComponent },
    { path: ':id', component: TodoDetailsComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
