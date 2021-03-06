import { FormControl } from '@angular/forms';

// Rules for user tag: (TAG EXAMPLE: #92V9Y088)
const requiredSymbols = /^(?=.*[#])(?=.*[A-Za-z])(?=.*[0-9])/;
const forbiddenSymbols = /^(?=.*[\$\^\\\/\*\-\+()`~!@%&_=|"'])/;

export class FromValidators {
  static invalidTag(control: FormControl): { [key: string]: boolean } {
    if (
      !requiredSymbols.test(control.value) ||
      forbiddenSymbols.test(control.value)
    ) {
      return { invalidTag: true };
    }

    return null;
  }
}
