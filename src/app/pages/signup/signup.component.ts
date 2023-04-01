import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Registro } from 'src/app/shared/interfaces/registro';
import { RegistroService } from 'src/app/shared/services/registro.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private registroService: RegistroService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmar: ['', [Validators.required, Validators.minLength(8)]],
      terminos: [false, Validators.requiredTrue]
    }, {
      validators: [() =>  this.validarPasswords()]
    });
  }

  validarPasswords(): ValidationErrors | null {
    if(!this.form) return null;
    const { password, confirmar } = this.form.getRawValue();
    if(password === confirmar) {
      return null;
    } else {
      return { unmatch: true }
    }
  }

  crearUsuario() {
    console.log('Hiciste submit', this.form);
    if(this.form.valid) {
      const datos: Registro = this.form.getRawValue();
      this.registroService.registrar(datos).subscribe({
        next: (respuesta) => {
          this.snackBar.open('Se registró correctamente!', 'Success', {
            duration: 5000
          });
          this.router.navigate(['login']);
        },
        error: (err) => {
          console.log('Algo salio mal')
        }
      });
    }
  }

}
