import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.page.html',
  styleUrls: ['./edit-candidat.page.scss'],
})
export class EditCandidatPage implements OnInit {
  formulaire!: FormGroup;
  value: any;


  constructor(private formBuilder: FormBuilder, private navCtrl:NavController) { }

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

  save(){}
  back(){
    this.navCtrl.pop()
  }

}
