import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { TrucksFilterPage } from '../trucks-filter/trucks-filter';
import { TrucksService } from '../../providers/trucks-service';
import { UserData } from '../../providers/user-data';
import * as _ from 'lodash';

@Component({
  selector: 'page-trucks',
  templateUrl: 'trucks.html',
  styleUrls: ['./trucks.scss'],
})
export class TrucksPage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList') scheduleList: IonList;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  trucks: any;
  allTruckDivisions: any;

  constructor(
    public alertCtrl: AlertController,

    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public truckService: TrucksService
  ) { }

  ngOnInit() {
    // this.app.setTitle('Schedule');
    this.updateSchedule();
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad Trucks', this.trucks);
    this.PresentLoader();
  }

  async PresentLoader() {
    const loader = await this.loadingCtrl.create({
      message: 'Getting data...'
    });

    loader.present().then(() => {
      this.truckService.getTrucks2().subscribe(data => {
        this.trucks = data;
        this.allTruckDivisions =
          _.chain(data)
            .groupBy('currentCity')
            .toPairs()
            .map(item => _.zipObject(['city', 'trucks'], item))
            .value();

        this.groups = this.allTruckDivisions;
        // console.log('division trucks', this.allTruckDivisions);        
        loader.dismiss();
      });
    });
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    /*     this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
          this.shownSessions = data.shownSessions;
          this.groups = data.groups;
        }); */
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: TrucksFilterPage,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updateSchedule();
    }
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      const alert = await this.alertCtrl.create({
        header: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      await alert.present();
    }

  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
