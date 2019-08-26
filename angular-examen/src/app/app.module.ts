import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    RouterModule.forChild([
      {path: '', component: SearchComponent},
      {path: 'list', component: ListComponent},
      {path: 'result/:query', component: ResultComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
