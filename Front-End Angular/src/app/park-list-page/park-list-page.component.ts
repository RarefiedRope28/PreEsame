import { Component, OnInit } from '@angular/core';
import { Park } from '../models/Park';
import { ProxyApiService } from '../proxy-api.service';

@Component({
  selector: 'app-park-list-page',
  templateUrl: './park-list-page.component.html',
  styleUrls: ['./park-list-page.component.scss']
})
export class ParkListPageComponent implements OnInit {

  parkList: Park[] = [];

  constructor(private api: ProxyApiService) { }

  ngOnInit(): void {
    this.api.getParks().subscribe(data => {
      this.parkList = data;
    });
  }

}
