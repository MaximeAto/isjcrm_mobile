import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.page.html',
  styleUrls: ['./taches.page.scss'],
})
export class TachesPage implements OnInit {

  filter!: string;
  type: any;


  constructor(public navCtrl: NavController,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.filter = this.type
    });
  }
  
  back(){
    this.navCtrl.pop()
  }

  ngOnInit() {}
}
