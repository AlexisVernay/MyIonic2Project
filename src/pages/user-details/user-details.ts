import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  id: number;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id= navParams.get('id');
  }
}
