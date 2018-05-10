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
  form: any;
  // private starshipComponents = [];
  starshipComponentsSelected = [];
  starship = new Starship();
  constructor(private router: Router) {}

  ngOnInit() {}

  checkChange(e: any) {
    console.log(e.target.toString());
    const obj = this.starship.components.find(x => x.type === e.target['id']);
    obj.selected = e.target.checked;
    if (e.target.checked) {
      this.starshipComponentsSelected.push(obj);
    } else {
      const indx = this.starshipComponentsSelected.indexOf(obj);
      this.starshipComponentsSelected.splice(indx);
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
