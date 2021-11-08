import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conversao, ConversaoResponse } from '../models';


@Injectable()
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=";

  constructor(private http: HttpClient) { }

  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaOrigem}&symbols=${conversao.moedaDestino}`;
    return this.http.get(this.BASE_URL + params);
  }

  cotacaoDestino(conversaoResponse: ConversaoResponse,
    conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaDestino];
  }

  cotacaoOrigem(conversaoResponse: ConversaoResponse,
    conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaDestino]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}