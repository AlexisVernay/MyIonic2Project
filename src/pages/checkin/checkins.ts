import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Checkin } from '../../models/checkin';

import { CheckinsAPI } from '../../providers/checkin-api';
import { CheckinDetailsPage } from '../checkin-details/checkin-details';

@Component({
  selector: 'page-checkins',
  templateUrl: 'checkins.html'
})
export class CheckinsPage {
  checkin: Checkin[]

  constructor(public navCtrl: NavController, private CheckinsAPI: CheckinsAPI) {
    CheckinsAPI.load().subscribe(checkin => {
      this.checkin = checkin;
    })
  }

  goToDetails(id: number) {
    this.navCtrl.push(CheckinDetailsPage, {id});
  }
}
