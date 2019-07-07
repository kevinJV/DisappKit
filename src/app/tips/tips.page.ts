import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {
  tips: any = [ 
    { type: 'Medida de autoprotección', disaster: 'Lluvias intensas', description: 'Revisar, cada cierto tiempo, el estado del tejado, el de las bajadas de agua de edificios y de los desagües próximos.' },
    { type: 'Medida de autoprotección', disaster: 'Altas temperaturas', description: 'Limite su exposición al sol, permanezca en lugares protegidos del sol el mayor tiempo posible y manténgalos bien ventilados.' },
    { type: 'Medida de autoprotección', disaster: 'Lluvias intensas', description: 'Colocar los documentos importantes y, sobre todo, los productos peligrosos, en aquellos lugares de la casa en los que la posibilidad de que se deterioren por la humedad o se derramen, sea menor.' },
    { type: 'Medida de autoprotección', disaster: 'Altas temperaturas', description: 'Tenga en cuenta que, al entrar o salir de lugares climatizados, se producen cambios bruscos de temperatura que pueden afectarle.' },
    { type: 'Medida de autoprotección', disaster: 'Lluvias intensas', description: 'Retirar del exterior de la vivienda, aquellos objetos que puedan ser arrastrados por el agua.' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
