import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, GIFType } from 'src/app/interfaces/interface';
import { environment } from './../../../environments/environment';

const url = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  private _history: string[] = [];
  public resultados: Data[] = [];

  public get getHistory() {
    return [...this._history];
  }

  public buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http
      .get<GIFType>(`${url}/search?api_key=${apiKey}&q=${query}`)
      .subscribe(resp => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

    console.log(this._history);
  }
}
