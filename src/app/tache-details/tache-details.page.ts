import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tache-details',
  templateUrl: './tache-details.page.html',
  styleUrls: ['./tache-details.page.scss'],
})
export class TacheDetailsPage implements OnInit {

  task: string = "go"
  type!: string;

  constructor(private toastController: ToastController, public navCtrl: NavController) {

   }

  ngOnInit() {
  }



  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Tâche terminée',
      duration: 1500,
      color: "success",
      icon: "checkmark-circle-outline",
      position: position,
    });

    await toast.present();
  }
  
  back(){
    this.navCtrl.pop()
  }

}
