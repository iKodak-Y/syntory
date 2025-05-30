import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonRow, IonLabel, IonInput, IonItemDivider, IonSearchbar, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../componentes/header/header.component";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-emitir-factura',
  templateUrl: './emitir-factura.page.html',
  styleUrls: ['./emitir-factura.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonItemDivider, IonInput, IonLabel, IonRow, IonDatetime, IonModal, IonDatetimeButton, IonSelect, IonSelectOption, IonList, IonItem, IonIcon, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class EmitirFacturaPage implements OnInit {
  emisores: any[] = [];
  constructor(
    private router: Router,
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getEmisor().subscribe(data => {
      this.emisores = data[0];
    })
  }

  volver() {
    this.location.back();
  }




}