import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuItem } from 'src/app/interfaz/interfaces';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { HeaderComponent } from "../../componentes/header/header.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    CommonModule,
    RouterModule
  ]
})
export class TabsPage implements OnInit {
  menuItems: MenuItem[] = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this.apiService.getMenu().subscribe(menuData => {
      this.menuItems = menuData;
    })
  }

  getTabName(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1] || '';
  }
}