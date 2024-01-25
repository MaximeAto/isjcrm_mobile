import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-tableau-debord',
  templateUrl: './tableau-debord.page.html',
  styleUrls: ['./tableau-debord.page.scss'],
})
export class TableauDebordPage implements OnInit {
  
  perview = 1.2
  user:any
  accountContacts: any[] = [];
  allContacts: any[] = [];
  convertis: any[] = []


  constructor(private router: Router, private candidatserv:CandidatService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")!);
    this.candidatserv.getContactsForAccount(this.user.id).subscribe(
      (response) => {
        this.accountContacts = response.contacts;
      },
      (error) => {
        console.error('Error getting account contacts:', error);
      }
    );

    // Appel à la méthode pour récupérer tous les contacts
    this.candidatserv.getAllContacts().subscribe(
      (response) => {
        this.allContacts = response.contacts;
        for (let c of this.allContacts)          
          if(c.stage == 'Etudiant')            
            this.convertis.push(c)
      },
      (error) => {
        console.error('Error getting all contacts:', error);
      }
    );
  }

  taches(type:any){
    this.router.navigate(['/taches', type]);
  }

  candidats(status:any){
    this.router.navigate(['home/candidats', status]);
  }

}
