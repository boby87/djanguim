import {Component, Input, OnInit} from '@angular/core';
import {Camera, CameraResultType} from "@capacitor/camera";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MembreService} from "../../Service/MembreService";
import {Membres} from "../../Model/Membres";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  image: string;
  form: FormGroup;

  constructor(public membreService:MembreService,public router:Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  async takePicture() {
    this.image = null;
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    }).then(i => {
      this.image = "data:image/png;base64," + i.base64String
    });

  };

  initForm() {
    this.form = new FormGroup({
      nomcomplet: new FormControl('', {validators: [Validators.required]}),
      cni: new FormControl('', {validators: [Validators.required]}),
      telephone: new FormControl('', {validators: [Validators.required]}),
      datenaissance: new FormControl(''),
      username: new FormControl('', {validators: [Validators.required]}),
      sexe: new FormControl('', {validators: [Validators.required]}),
      emails:new FormControl('',{validators:[Validators.required,Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
      rpassword: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
    })
  }

  onSubmit() {
    if (!this.form.valid) return;

    let membre:Membres;
    membre=this.form.value;
    membre.image=this.image;
    membre.role=this.membreService.rolename;
    this.membreService.loadingController.create({
      message:'Enregistrement en cours ..',
      spinner:'dots'
    }).then(l=>{
      l.present();
      this.membreService.createMemebre(membre).subscribe(
        data=>{
          l.dismiss();
          this.membreService.membre=data;
          this.router.navigateByUrl('/home');
          this.membreService.presentToast('Merci d avoir créé le compte');
        },error => {
          l.dismiss();
          this.membreService.presentToast(error.error.message);
        }
      )
    })
  }
}
