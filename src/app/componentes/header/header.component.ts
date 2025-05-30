import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton],
  standalone: true
})
export class HeaderComponent {
  @Input() titulo: string = 'Syntory';
  @Input() botonConfig: {
    mostrar: boolean;
    texto: string;
    icono?: string;
  } = { mostrar: false, texto: '' };

  @Output() accionBoton = new EventEmitter<void>();

  ejecutarAccion() {
    this.accionBoton.emit();
  }
}