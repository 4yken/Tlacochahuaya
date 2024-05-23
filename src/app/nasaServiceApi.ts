import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class nasaServiceApi {

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get<any>('https://ssd-api.jpl.nasa.gov/fireball.api?limit=20')
    
  }

  }




