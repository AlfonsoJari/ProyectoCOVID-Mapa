import { Component} from '@angular/core';
import { VisitaModel } from 'src/models/visitaModel';
import { StorageService } from 'src/services/storage.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ProyectoCOVID-Mapa';
  visitas;
  
  constructor(private usersService: UsersService,
    private storageService: StorageService) {
      this.storageService.setSession("url",window.location.href);
      this.usersService.consultarVisitas().subscribe((data: VisitaModel) => {
        this.storageService.setSession("visitas",data.visitas);
     })
  }

  ngOnInit(): void {
    this.visitas = sessionStorage.getItem("visitas");
    }
}

