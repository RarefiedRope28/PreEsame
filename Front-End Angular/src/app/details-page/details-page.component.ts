import { Component, OnInit } from '@angular/core';
import { Park } from '../models/Park';
import { ProxyApiService } from '../proxy-api.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  singlePark = new Park;
  constructor(private api: ProxyApiService) { }

  ngOnInit(): void {
    this.api.getParkById(parseInt(location.href.substring(location.href.lastIndexOf('/') + 1))).subscribe(data => {
      this.singlePark = data;
    })
  }
}
