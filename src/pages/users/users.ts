import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Checkin } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  checkin: Checkin[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(checkin => {
      this.checkin = checkin;
    })
  }

  goToDetails(id: number) {
    this.navCtrl.push(UserDetailsPage, {id});
  }
}
