import { Component, OnInit } from '@angular/core';
import {ReunionService} from "../../Service/ReunionService";

@Component({
  selector: 'app-modalregister',
  templateUrl: './modalregister.component.html',
  styleUrls: ['./modalregister.component.scss'],
})
export class ModalregisterComponent implements OnInit {
  reference: string;

  constructor(public reunionService:ReunionService) { }

  ngOnInit() {}

  getReunion(reference: string) {
    this.reunionService.loadingController.create({

    }).then(l=>{
      l.present();
      this.reunionService.getReunionByReference(reference).subscribe(
        data=>{
          l.dismiss();
          if (data){
            this.reunionService.membreService.membre.referent_reunion=data.reference;
            this.reunionService.router.navigateByUrl('/home/singup');
            this.reunionService.membreService.presentToast("Réference confirmée");
          }
        },error => {
          l.dismiss();
          this.reunionService.membreService.presentToast(error.error.message);
        }
      )
    })

  }
}
