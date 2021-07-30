import { Component, OnInit } from '@angular/core';
import {Membres} from "../Model/Membres";
import {MembreService} from "../Service/MembreService";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public membreService:MembreService) { }

  ngOnInit() {
  }

}
