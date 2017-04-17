import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//page
import { CheckinsPage } from '../pages/checkin/checkins';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { CheckinDetailsPage } from '../pages/checkin-details/checkin-details';

import { CheckinsAPI } from '../providers/checkin-api';

@NgModule({
  declarations: [
    MyApp,
    CheckinsPage,
    ReposPage,
    OrganisationsPage,
    CheckinDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CheckinsPage,
    ReposPage,
    OrganisationsPage,
    CheckinDetailsPage
  ],
  providers: [CheckinsAPI]
})
export class AppModule {}
