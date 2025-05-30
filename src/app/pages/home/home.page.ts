import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../componentes/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class HomePage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
