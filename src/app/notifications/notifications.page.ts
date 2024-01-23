import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  activeTab: string = 'nonvu';

  constructor(public navCtrl:NavController) {}

  toggleTab(tabId: string): void {
    this.activeTab = tabId;
  }
  ngOnInit() {}

  back() {
    this.navCtrl.pop()
  }
}
