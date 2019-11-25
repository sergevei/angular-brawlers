import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FromValidators } from './form.validators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public form: FormGroup;
  public onFocus: boolean;

  constructor() {
    this.onFocus = false;
  }

  ngOnInit() {
    this.form = new FormGroup({
      tag: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(7),
        Validators.required,
        FromValidators.invalidTag
      ])
    });
  }

  submit() {
    console.log(this.form);
  }
}
