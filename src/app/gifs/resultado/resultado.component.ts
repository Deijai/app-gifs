import { Component, OnInit } from '@angular/core';
import { Data, GIFType } from 'src/app/interfaces/interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get resultados (): Data[] {
    return this.gifsService.resultados;
  };

  ngOnInit(): void {

  }

}
