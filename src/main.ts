import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { document, add, closeCircle, cog, cube, download, eye, eyeOff, home, lockClosed, menu, people, person, search, arrowBackOutline, trashBin, arrowBack, send, caretBack } from "ionicons/icons"

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

addIcons({
  'home': home,
  'people': people,
  'menu': menu,
  "cog": cog,
  "search": search,
  "add": add,
  "eye": eye,
  "download": download,
  "person": person,
  "lock-closed": lockClosed,
  "eye-off": eyeOff,
  "close-circle": closeCircle,
  "cube": cube,
  "document": document,
  "arrow-back": arrowBack,
  "trash-bin": trashBin,
  "send": send,
  "caret-back": caretBack
})