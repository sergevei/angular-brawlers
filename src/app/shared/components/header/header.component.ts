import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FromValidators } from './form.validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('tag', { static: false }) tagField: ElementRef;
  public form: FormGroup;
  public onFocus: boolean;

  constructor(private router: Router) {
    this.onFocus = false;
  }

  ngOnInit() {
    this.form = new FormGroup({
      tag: new FormControl('', [
        Validators.minLength(8),
        Validators.maxLength(9),
        Validators.required,
        FromValidators.invalidTag
      ])
    });
  }

  submit() {
    !this.form.controls.tag.invalid
      ? this.router.navigate(['/players', (this.form.controls.tag.value).toUpperCase()])
      : this.tagField.nativeElement.focus();
  }
}
