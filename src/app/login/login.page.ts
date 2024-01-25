import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulaire!: FormGroup;
  erreurLogin = false

  constructor(private formBuilder: FormBuilder, private router: Router, private userserv:UserService) {}

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
    if (this.formulaire.valid) {
      const email = this.formulaire.get('mail')?.value;
      const password = this.formulaire.get('password')?.value;

      // Utiliser le service UserService pour effectuer l'appel à l'API
      this.userserv.login(email, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          localStorage.setItem("user", JSON.stringify(response) )
          this.router.navigate(['/home/tableau-debord']);
        },
        (error) => {
          console.error('Login error:', error.error.message);
          this.erreurLogin = true;
        }
      );
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
