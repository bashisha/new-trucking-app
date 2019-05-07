import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TrucksService } from '../../providers/trucks-service';


@Component({
  selector: 'page-trucks-filter',
  templateUrl: 'trucks-filter.html',
  styleUrls: ['./trucks-filter.scss'],
})
export class TrucksFilterPage implements AfterViewInit {

  tracks: { name: string, isChecked: boolean }[] = [];

  constructor(
    public trucksService: TrucksService,
    public modalCtrl: ModalController
  ) { }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {
    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = []; // this.navParams.data.excludedTracks;

    // this.trucksService.getTrucks2().subscribe((trackNames: string[]) => {
    //   trackNames.forEach(trackName => {
    //     this.tracks.push({
    //       name: trackName,
    //       isChecked: (excludedTrackNames.indexOf(trackName) === -1)
    //     });
    //   });
    // });
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
