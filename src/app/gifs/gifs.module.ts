import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BuscaComponent } from './busca/busca.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [GifPageComponent, BuscaComponent, ResultadoComponent],
  imports: [
    CommonModule
  ],
  exports:[GifPageComponent, BuscaComponent, ResultadoComponent]
})
export class GifsModule { }
