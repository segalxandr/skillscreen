import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'skill-app-string-encrypt',
  templateUrl: './string-encrypt.component.html',
  styleUrls: ['./string-encrypt.component.css']
})
export class StringEncryptComponent implements OnInit {
  stage = 0;
  encryptMethod: string;
  btnLabel = 'Encrypt';
  inputValue: string;
  stringToEncrypt = '';
  stringToDisplay = '';
  descriptions = [
    'Replace the string with all \'X\'s.',
    'Replace each char with the char one higher on the ASCII table.',
    'Replace each char with the 3 next highest chars on the ASCII table.'
  ];
  methodDescription: string;
  constructor(private router: Router) {}

  ngOnInit() {}
  changeEncryption(val: string): void {
    this.encryptMethod = val;

    this.stage += 1;
    switch (this.encryptMethod) {
      case 'A':
        this.methodDescription = this.descriptions[0];
        break;
      case 'B':
        this.methodDescription = this.descriptions[1];
        break;
      case 'C':
        this.methodDescription = this.descriptions[2];
        break;
    }
  }
  doExecute(): void {
    this.stage += 1;
    this.btnLabel = 'Exit';
    if (this.stage >= 3) {
      this.router.navigate(['/']);
    } else {
      const vals = this.stringToEncrypt.split('');
      const chars = vals.map(ch => ch.charCodeAt(0));
      switch (this.encryptMethod) {
        case 'A':
          this.stringToDisplay = vals.map(v => 'X').join('');
          break;
        case 'B':
          const charvals = chars.map(v => String.fromCharCode(v + 1));
          this.stringToDisplay = charvals.join('').toUpperCase();
          break;
        case 'C':
          const charvalsx3 = chars.map(
            v =>
              String.fromCharCode(v + 1) +
              String.fromCharCode(v + 2) +
              String.fromCharCode(v + 3)
          );
          this.stringToDisplay = charvalsx3.join('').toUpperCase();

          break;
      }
    }
  }
  doReset(): void {
    this.stage = 0;
    this.inputValue = '';
    this.stringToEncrypt = '';
    this.stringToDisplay = '';
    this.btnLabel = 'Encrypt';
  }
  onKey(event: any): void {
    const val = event.target.value;
    // val = val.slice(-1);
    console.log('value ', val);
    this.stringToEncrypt = val;
  }
}
