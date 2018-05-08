import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipComponent } from './starship/starship.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { RequestInputComponent } from './request-input/request-input.component';
import { StateMachineComponent } from './state-machine/state-machine.component';
import { StringEncryptComponent } from './string-encrypt/string-encrypt.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diceroll', component: DiceRollComponent },
  { path: 'reqinput', component: RequestInputComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'statemach', component: StateMachineComponent },
  { path: 'strencrypt', component: StringEncryptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
