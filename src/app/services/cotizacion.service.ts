import { GLOBAL } from './global';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  public url:string;

  constructor(private http: HttpClient) {
    this.url=GLOBAL.url;
   }

   getCotizacion(target:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(this.url+'cotizacion/'+target.target+'/'+target.source+'/'+target.quantity,{headers});
   }

   getCotizacionDolar(target:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(this.url+'cotizacion/dolar',{headers});

   }

   getCotizacionPesos(target:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(this.url+'cotizacion/pesos',{headers});

   }

   getCotizacionCordoba(target:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(this.url+'cotizacion/cordoba',{headers});

   }
}
