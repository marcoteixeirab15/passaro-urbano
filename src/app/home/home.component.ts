import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../oferta.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas()
    this.ofertasService.getOfertas2()
      .then((ofertas: Oferta[]) => { console.log("Retorno Then após 3 segundos"); this.ofertas = ofertas })
      .catch((param: any) => console.log(param));
  }

}
