import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonIcon, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ApiService } from 'src/app/servicios/api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonButton, IonIcon, IonInput, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class FacturasPage implements OnInit {

  invoices: any[] = [];
  isEmitirFacturaRoute: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isEmitirFacturaRoute = event.urlAfterRedirects.includes('emitir-factura');
        if (!this.isEmitirFacturaRoute) {
          this.loadInvoices(); 
        }
      }
    });
  }

  ngOnInit() {
    this.isEmitirFacturaRoute = this.router.url.includes('emitir-factura');
    if (!this.isEmitirFacturaRoute) {
      this.loadInvoices();
    }
  }

  loadInvoices() {
    this.apiService.getInvoices().subscribe(invoicesData => {
      this.invoices = invoicesData;
    })
  };

  emitirFactura() {
    this.router.navigate(['/tabs/facturas/emitir-factura']);
  }

}
