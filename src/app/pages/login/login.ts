import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // el formulario, un control por cada campo
  form = new FormGroup({
    usuario: new FormControl('', { validators: [Validators.required] }),
    contrasena: new FormControl('', { validators: [Validators.required] }),
  });

  // si esta mal corta, si esta bien muestra los datos
  ingresar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
