import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'categories', redirectTo: '/home', pathMatch: 'full'},
  { path: 'categories/:id', component: CategoriesPageComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
