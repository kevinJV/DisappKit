import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  
  incidentesList: any;
  markers: any = [];
  /* lat: any  
  lng: any */
  lat: number = 16.618043
  lng: number = -93.096741
  constructor(
    private router: Router,    
    private api: ApiService,
    private geolocation: Geolocation,  
  ) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    })
    this.ionViewDidLoad()
   }

  ngOnInit() {
  }
  reportar(){
    this.router.navigateByUrl("/create-event")
  }
  ionViewDidLoad(){
    this.api.getIncidentes(moment().format('DD-MM-YYYY')).subscribe(response => {
      this.incidentesList = response
      console.log(response)
    })
  }

}
