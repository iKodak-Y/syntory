import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';
import { CommonModule } from '@angular/common';
import { FacturasPage } from './pages/facturas/facturas.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'facturas',
        loadComponent: () => import('./pages/facturas/facturas.page').then(m => m.FacturasPage),
        children: [
          {
            path: 'emitir-factura',
            loadComponent: () => import('./pages/emitir-factura/emitir-factura.page').then(m => m.EmitirFacturaPage)
          }
        ]
      },
      {
        path: 'clientes',
        loadComponent: () => import('./pages/clientes/clientes.page').then(m => m.ClientesPage)
      },
      {
        path: 'productos',
        loadComponent: () => import('./pages/productos/productos.page').then(m => m.ProductosPage)
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./pages/configuracion/configuracion.page').then(m => m.ConfiguracionPage)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  }
];
