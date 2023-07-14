import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'categories', redirectTo: '/home', pathMatch: 'full'},
  { path: 'categories/:id', component: CategoriesPageComponent },
  // { path: 'about', component: SearchComponent, data: { search: 'search' } },
  { path: '**', pathMatch: 'full', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
