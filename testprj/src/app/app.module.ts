import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerAppComponent } from './core/container/container-app/container-app.component';
import { ListCardComponent } from './core/components/list-card/list-card.component';
import { CardComponent } from './core/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerAppComponent,
    ListCardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
