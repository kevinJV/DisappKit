import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any = []

  constructor(private weather_service: WeatherService, private geolocation: Geolocation) { 
    
  }

  ngOnInit() {
    this.getlocation()
  }

  getlocation() {
    this.geolocation.getCurrentPosition()
      .then((response: any) => {
        this.getNews(response.coords)
      })
      .catch((error) => {
       console.log(error)
     });
  }

  getNews(location: any) {
    this.weather_service.getNews({ latitude: location.latitude, longitude: location.longitude })
      .subscribe((response: any) => {
        this.news = response.forecasts
        console.log(this.news)
      },
      error => {
        console.log(error)
      })
  }
}
