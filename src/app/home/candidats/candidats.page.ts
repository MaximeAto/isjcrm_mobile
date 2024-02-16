import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.page.html',
  styleUrls: ['./candidats.page.scss'],

})
export class CandidatsPage implements OnInit {
  value!: string
  primary = "primary"
  danger = "danger"
  tertiary = "tertiary"
  activeTab!: string
  status: any;

  candidats:any[]=[];
  searchTerm: string = '';
  candidatsFiltres:any[]=[];
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private route: ActivatedRoute, private candidatservice: CandidatService) { 
    this.route.params.subscribe(params => {
      this.status = params['status'];
      this.activeTab = this.status
    });
  }

  ngOnInit() {
    // this.candidats = this.candidatservice.getcandidat();
    console.log("good");
    
  }
  
  ionViewDidEnter() {  
    this.loadcandidats(); 
  }

  toggleTab(tabId: string): void {
    this.activeTab = tabId;
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  loadcandidats() {
    this.candidatservice.getcandidat().subscribe((data) => {
      this.candidats = data;
      console.log(this.candidats);

    })
  }


}
