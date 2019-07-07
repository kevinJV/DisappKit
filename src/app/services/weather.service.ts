import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api_url: string = 'https://api.weather.com/v1/geocode';
  api_key: string = 'forecast/daily/3day.json?units=m&language=es-MX&apiKey=da328055e2e940d8b28055e2e9e0d851'

  constructor(private http_client: HttpClient) { 

  }

  getNews(location: any) {
    return this.http_client.get(`${this.api_url}/${location.latitude}/${location.longitude}/${this.api_key}`);
  }
}
