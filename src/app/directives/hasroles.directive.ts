// https://itnext.io/role-based-access-control-in-angular-templates-2eeca497855

import { Directive } from '@angular/core';

@Directive({
  selector: '[appHasroles]'
})
export class HasrolesDirective {

  constructor() { }

}
