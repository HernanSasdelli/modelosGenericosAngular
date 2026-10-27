import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { clavesIguales, contrasenaSegura } from '../validadores/validadores';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // clavesIguales va en el grupo porque mira dos campos a la vez
  form = new FormGroup(
    {
      nombre: new FormControl('', { validators: [Validators.required] }),
      apellido: new FormControl('', { validators: [Validators.required] }),
      correo: new FormControl('', { validators: [Validators.required, Validators.email] }),
      usuario: new FormControl('', { validators: [Validators.required, Validators.minLength(3)] }),
      contrasena: new FormControl('', { validators: [Validators.required, contrasenaSegura] }),
      repetir: new FormControl('', { validators: [Validators.required] }),
    },
    { validators: [clavesIguales] },
  );

  // si esta mal corta, si esta bien muestra los datos
  registrarme() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
