import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-candidat',
  templateUrl: './ajouter-candidat.page.html',
  styleUrls: ['./ajouter-candidat.page.scss'],
})
export class AjouterCandidatPage implements OnInit {
  formulaire!: FormGroup;
  value: any;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulaire = this.formBuilder.group({
      nom: [
        '',
        [
          Validators.required,
        ],
      ],

      prenom: [
        '',
        [
          Validators.required,
        ],
      ],

      telephone_candidat: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)
        ],
      ],

      classe: [
        '',
        [
          Validators.required,
        ],
      ],

      telephone_parent: [
        '',
        [
          Validators.required,
          Validators.maxLength(12)
        ],
      ],

      etablissement: [
        '',
        [
          Validators.required,
        ],
      ],

    });
  }

  save() {}
}
