import { Component, OnInit } from '@angular/core';
import {ReunionService} from "../Service/ReunionService";

@Component({
  selector: 'app-president',
  templateUrl: './president.page.html',
  styleUrls: ['./president.page.scss'],
})
export class PresidentPage implements OnInit {

  constructor(public reunionService:ReunionService) { }

  ngOnInit() {
  }

}
