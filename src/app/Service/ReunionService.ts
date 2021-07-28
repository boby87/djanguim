import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Reunion} from "../Model/Reunion";
import {AdresseIP} from "./AdresseIP";
import {MembreService} from "./MembreService";

@Injectable()
export class ReunionService{


  constructor(public http:HttpClient,public membreService:MembreService,public toastController: ToastController,public loadingController: LoadingController,public router:Router) {
  }

  addReunion(reunion:Reunion,idpresident:number){
    return this.http.post<Reunion>(AdresseIP.host+'reunion/add/'+idpresident,reunion,
      {headers:new HttpHeaders({'Authorization':this.membreService.jwtokent})})
  }
}
