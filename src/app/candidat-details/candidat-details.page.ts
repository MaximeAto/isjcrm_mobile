import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.page.html',
  styleUrls: ['./candidat-details.page.scss'],
})
export class CandidatDetailsPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop()
  }
  
}
