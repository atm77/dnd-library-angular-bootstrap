import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface Teste {
  name: string;
  email: string;
  message: string;
}


@Component({
  selector: 'dndlibrary-subscription-form',
  templateUrl: 'subscription-form.component.html'
})
export class SubscriptionFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup;
  teste: Teste;

  ngOnInit() {

    this.teste = {
      name: 'oksdoaks',
      email: 'oaskdaoskd',
      message: 'odksaoka',
    }

    this.myForm = this.fb.group(this.teste);
  }

  onSubmit(data: FormData): void {
    console.log(data);
    debugger
  }

  setOtherValues(): void {
    this.teste = {
      name: 'aaaaugusto',
      email: 'testes',
      message: 'okokok'
    }

    this.myForm = this.fb.group(this.teste);
  }

}
