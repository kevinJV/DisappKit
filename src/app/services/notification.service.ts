import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  api_url: string = 'https://us-central1-disppkit.cloudfunctions.net/notification?tipo='  
  
  constructor(public firebase: Firebase, private http_client: HttpClient) { 

  }

  subscribePokemons() {
    this.firebase.subscribe('events')
      .then(response => {
        console.log(response);
      });
  }

  listenNotifications() {
    return this.firebase.onNotificationOpen();
  }

  sendNotification(event_type: string) {
    return this.http_client.get(`${this.api_url}${event_type}`);
  }
}
