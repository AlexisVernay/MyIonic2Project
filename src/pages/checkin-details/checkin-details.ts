import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-checkin-details',
  templateUrl: 'checkin-details.html'
})
export class CheckinDetailsPage {
  id: number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id= navParams.get('id');
  }
}
