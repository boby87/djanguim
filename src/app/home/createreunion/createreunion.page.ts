import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReunionService} from "../../Service/ReunionService";
import {MembreService} from "../../Service/MembreService";
import {Reunion} from "../../Model/Reunion";
import {Camera, CameraResultType} from "@capacitor/camera";

@Component({
  selector: 'app-createreunion',
  templateUrl: './createreunion.page.html',
  styleUrls: ['./createreunion.page.scss'],
})
export class CreatereunionPage implements OnInit {

  logo:string;
  form: FormGroup;
  isTypePassword: boolean;

  constructor(public reunionService:ReunionService,public membreService:MembreService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      libelle: new FormControl('', {validators: [Validators.required]}),
      telephone: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.email]}),
      devise: new FormControl('', {validators: [Validators.required]}),
      statuts: new FormControl('', {validators: [Validators.required]}),


    })
  }

  onSubmit() {
    if (!this.form.valid) return;
    let reunion:Reunion;
    reunion=this.form.value;
    reunion.logo=this.logo;
    this.membreService.loadingController.create({
      message:'Enregistrement en cours ..',
      spinner:'dots'
    }).then(l=> {
      l.present();
      this.reunionService.addReunion(reunion, this.membreService.membre.idmembre).subscribe(
        data => {
          l.dismiss();
          this.membreService.membre.reunion=data;
          //this.membreService.SaveToken(this.membreService.jwtokent);
          this.membreService.presentToast(data.libelle+' créé avec succes');
          this.membreService.router.navigateByUrl('president')
        },error => {
          l.dismiss();
          this.membreService.presentToast(error.error.message);
        }
      )
    })
  }

  async takePicture() {
    this.logo = null;
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    }).then(i => {
      this.logo = "data:image/png;base64," + i.base64String
    });

  };

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }


}
