import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { languages } from '../../../../shared/utils/enums';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'dndlibrary-subscription-form',
  templateUrl: 'subscription-form.component.html'
})
export class SubscriptionFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  languages = languages;

  subscriptionForm: FormGroup;

  ngOnInit() {
    this.createForm(new User());
  }

  onSubmit(fdata: FormData): void {
    console.log(fdata);
    debugger
  }

  createForm(user: User) {
    /*this.subscriptionForm = new FormGroup({
      name: new FormControl(user.name),
      email: new FormControl(user.email),
      culture: new FormControl(user.culture),
    })*/

    this.subscriptionForm = this.fb.group({
      name: [user.name],
      email: [user.email],
      culture: [user.culture],
    })
  }

  setOtherValues(): void {

    let user = new User();
    user.name = 'Augusto';
    user.email = 'augusto@gmail.com';
    user.culture = Object.keys(languages).find(x => x == 'pt-BR');

    this.subscriptionForm.setValue({
      name: [user.name],
      email: [user.email],
      culture: [user.culture],
    })

  }

}
