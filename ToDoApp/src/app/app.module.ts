import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewToDoListComponent } from './view-to-do-list/view-to-do-list.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewToDoListComponent,
    AddToDoComponent,
    EditToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
