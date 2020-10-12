import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  [x: string]: any;

  capitals: string = '/assets/data/custom.geojson';

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  constructor(private http: HttpClient, private popupService: PopUpService) { }

  makeCapitalCircleMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res) {
        const lat = c.latitud;
        const lon = c.longitud;
        const circle = L.circleMarker([lon, lat]).addTo(map);
        circle.bindPopup(this.popupService.makeCapitalPopup(c));
      }

    });

  }
}
