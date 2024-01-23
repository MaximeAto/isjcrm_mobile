import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifdetail',
  templateUrl: './notifdetail.page.html',
  styleUrls: ['./notifdetail.page.scss'],
})
export class NotifdetailPage implements OnInit {

  type: string = "conversion"

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.pop()
  }
}
