import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from './starship';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  state = {};
  starshipComponentsSelected = [];
  starship: Starship;
  constructor(private router: Router) {}

  ngOnInit() {
    this.starship = new Starship();
  }

  checkChange(e: any) {
    console.log(e.target.toString());
    const obj = this.starship.components.find(x => x.type === e.target['id']);
    obj.selected = e.target.checked;
    this.updateSelected();

  }
  goBack() {
    this.router.navigate(['/']);
  }
  selectAllComponents() {
    this.starship.components.forEach(x => {
      x.selected = true;
    });
    this.updateSelected();
  }
  reset() {
    this.starship.components.forEach(x => {
      x.selected = false;
    });
    this.updateSelected();
  }
  updateSelected() {
    this.starshipComponentsSelected = this.starship.components.filter(
      x => x.selected
    );
  }
}
