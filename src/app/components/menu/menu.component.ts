import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  //La fonction retourne un Observable booléen
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    //.Observe retourne un Observable de Breakpoint
    // Un Observable permet de s'y abonner. Ainsi, il continue d'update ses données irt
    .pipe(
      map(result => result.matches),
      //On map les résultats en Booléen, d'où le type booléen de la fonction
      shareReplay()
    );

    menuItems = [
      {
        name: 'home',
        path: 'home'
      },
      {
        name: 'doctors',
        path: 'doctors'
      },
      {
        name: 'patients',
        path: 'patients'
      },
      {
        name: 'medicines',
        path: 'medicines'
      },
      {
        name: 'prescriptions',
        path: 'prescriptions'
      },
      {
        name: 'profile',
        path: 'profile',
      }
    ];

  constructor(private breakpointObserver: BreakpointObserver) {}  
  //Service qui sert à détecter les Breakpoints
  //Les breakpoints sont des "capteurs" que l'on peut écouter afin d'obtenir la résolution d'écran du client


}
