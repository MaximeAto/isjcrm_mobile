import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formulaire = this.formBuilder.group({
      mail: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.customPasswordValidator,
        ],
      ],
    });
  }

  login_in() {
    if (!this.formulaire.invalid) {
      this.router.navigate(['/home/tableau-debord']);
    }
  }

  customPasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    // Ajoutez vos règles de validation ici
    const password: string = control.value;

    // Exemple : Au moins une majuscule, un caractère spécial et un nombre
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;

    const hasUppercase = uppercaseRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);
    const hasNumber = numberRegex.test(password);

    const isValid = hasUppercase && hasSpecialChar && hasNumber;

    return isValid ? null : { invalidPassword: true };
  }
}
