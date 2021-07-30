import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MembreService} from "../Service/MembreService";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {ModalregisterComponent} from "./modalregister/modalregister.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form:FormGroup;
  isTypePassword:boolean;
  constructor(public membreService:MembreService,public router:Router,public modalController: ModalController) {
    this.initForm();
  }

  initForm(){
    this.form=new FormGroup({
      username:new FormControl('',{validators:[Validators.required]}),
      password:new FormControl('',{validators:[Validators.required,Validators.minLength(8)]}),
    })
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.membreService.login(this.form.value);
  }

  onChange() {
    this.isTypePassword=!this.isTypePassword;
  }

  async presentModal() {
    this.membreService.rolename='ADERANT';
    const modal = await this.modalController.create({
      component: ModalregisterComponent,
      cssClass: 'modal'
    });
    return await modal.present();
  }

  signToPresi() {
    this.membreService.rolename='PRESIDENT';
    this.router.navigateByUrl("/home/singup")
  }
}
