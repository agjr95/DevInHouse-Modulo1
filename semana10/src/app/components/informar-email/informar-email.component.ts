import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss'],
})
export class InformarEmailComponent implements OnInit {
  _form: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });
  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  enviar() {
    if (this._form.valid == false) {
      alert('Formulário Inválido!');
    }

    localStorage.setItem('userInfo', this._form.value.email);
    this.router.navigate(['/home']);
  }
}
