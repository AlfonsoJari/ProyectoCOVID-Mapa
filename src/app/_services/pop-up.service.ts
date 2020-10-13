import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Estado: ${data.capital}</div>` +
      `<div>Casos: ${data.state}</div>` +
      `<div>Muertes: ${data.population}</div>`
  }
}
