import { Component } from '@angular/core';
import {MembreService} from "./Service/MembreService";
//ionic capacitor run android --livereload-url=http://localhost:8100
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public membreService:MembreService) {

    membreService.takeUserSave();
    if (membreService.membre){
      membreService.navagateTo();
    }else {

    }
  }
}
