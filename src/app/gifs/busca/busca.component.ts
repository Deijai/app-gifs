import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GifsService } from './../services/gifs.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  @ViewChild('textBuscar')
  textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  public buscar(){
    const valor = this.textBuscar.nativeElement.value;

    if( valor.trim().length === 0 ) return;
      this.gifsService.buscarGifs( valor );
      this.textBuscar.nativeElement.value = '';

  }

}
