import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';


import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { StringEncryptComponent } from './string-encrypt/string-encrypt.component';
import { StarshipComponent } from './starship/starship.component';
import { StateMachineComponent } from './state-machine/state-machine.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { RequestInputComponent } from './request-input/request-input.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StringEncryptComponent,
    StarshipComponent,
    StateMachineComponent,
    DiceRollComponent,
    RequestInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
