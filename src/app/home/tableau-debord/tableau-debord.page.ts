import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-debord',
  templateUrl: './tableau-debord.page.html',
  styleUrls: ['./tableau-debord.page.scss'],
})
export class TableauDebordPage implements OnInit {
  
  perview = 1.2

  constructor(private router: Router) { }

  ngOnInit() {
  }

  taches(type:any){
    this.router.navigate(['/taches', type]);
  }

  candidats(status:any){
    this.router.navigate(['home/candidats', status]);
  }

}
