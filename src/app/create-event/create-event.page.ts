import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  otro=false;
  select=false;
  incidenteFormGroup: FormGroup;
  displayDate = new Date()
  dateFormat: String
  lat: number //= 16.7439582
  lng: number //= -93.0908545
  aux: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private geolocation: Geolocation,    
    public toastController: ToastController,
    private API : ApiService,
  ) {    
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    })
    this.dateFormat = moment().format('DD-MM-YYYY') //"" + this.displayDate.getFullYear() + "-" + this.displayDate.getMonth() + "-" + this.displayDate.getDay()
    this.incidenteFormGroup = this.formBuilder.group({
      'date': [this.dateFormat, Validators.required],
      'latitud': ['', Validators.required],
      'longitud': ['', Validators.required],
      'tipo': ['', Validators.required],
      'recomendacion':[""],
    })
  }

  async toastMessage() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado correctamente.',
      duration: 2000
    });
    toast.present();
  }

  opcion1(){
    this.select=true;
    this.otro=false;
    this.incidenteFormGroup.get("tipo").setValue("Inundacion");
  }
  opcion2(){
    this.select=true;
    this.otro=false;
    this.incidenteFormGroup.get("tipo").setValue("Incendio");
  }
  opcion3(){
    this.select=true;
    this.otro=false;
    this.incidenteFormGroup.get("tipo").setValue("Derrumbe");
  }
  opcion4(){
    this.select=true;
    this.otro=false;
    this.incidenteFormGroup.get("tipo").setValue("Deslave");
  }
  opcion5(){
    this.select=true;
    this.otro=false;
    this.incidenteFormGroup.get("tipo").setValue("Avalancha");
  }
  opcion6(){
    this.incidenteFormGroup.get("tipo").setValue("");
    this.select=false
    this.otro=true
  }
  async reportar(){
    await this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    })    
    this.incidenteFormGroup.get("latitud").setValue(this.lat);
    this.incidenteFormGroup.get("longitud").setValue(this.lng);    
    this.API.reportar(this.incidenteFormGroup.value).subscribe(response =>{
      console.log(response);      
      this.toastMessage();  
    },error =>{
      console.log(error.status)      
    })
    
  }

}
