import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrucksService } from '../../providers/trucks-service';
import * as _ from 'lodash';

@Component({
  selector: 'page-freight-detail',
  templateUrl: 'freight-detail.html',
  styleUrls: ['./freight-detail.scss'],
})
export class FreightDetailPage {
  freight: any;

  constructor(
    private dataProvider: TrucksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.dataProvider.getFreights().subscribe((data: any) => {
      const freightId = this.route.snapshot.paramMap.get('id');
      console.log(freightId);
      console.log(data);
      const obj = _.find(data, { id: freightId });
      console.log(obj);
      if (data) {
        for (const freight of data) {
          if (freight && freight.id === freightId) {
            this.freight = freight;
            break;
          }
        }
      }
    });
  }
}
