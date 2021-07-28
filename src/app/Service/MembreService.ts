import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Membres} from "../Model/Membres";
import {AdresseIP} from "./AdresseIP";
import {LoadingController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AddCommand} from "@angular/cli/commands/add-impl";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class MembreService {

  public roles: Array<any>;
  membre: Membres;
  public jwtokent: any;

  constructor(public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController, public router: Router) {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  createMemebre(membre: Membres) {
    return this.http.post<Membres>(AdresseIP.host + "membre/register", membre)
  }

  login(membre: Membres) {
    this.loadingController.create({
      message: 'Enregistrement en cours ..',
      spinner: 'dots'
    }).then(l => {
      l.present();
      this.http.post(AdresseIP.host + 'login', membre, {observe: 'response'}).subscribe(
        data => {

          this.jwtokent = data.headers.get("Authorization");

        },
        error => {
          this.presentToast(error.error.message);
          l.dismiss();
        }, () => {
          this.getuserbyusername(membre.username).subscribe(
            data => {
              l.dismiss();
              this.membre = data;
              this.SaveToken(this.jwtokent);
              this.navagateTo();
            }, error => {
              this.presentToast(error.error.message);
              l.dismiss();
            }
          )
        }
      )
    })
  }

  getuserbyusername(login: string) {
    return this.http.get<Membres>(AdresseIP.host + 'membre/by/' + login,
      {headers: new HttpHeaders({'Authorization': this.jwtokent})})
  }

  SaveToken(jwt) {
    this.jwtokent = jwt;
    localStorage.setItem("token", jwt);
    localStorage.setItem("membre", JSON.stringify(this.membre));
    let jwthelper = new JwtHelperService();//npm i @auth0/angular-jwt
    this.roles = jwthelper.decodeToken(this.jwtokent).roles;
  }

  navagateTo() {
    if (this.membre) {
      if (this.membre.roles.findIndex(i => i.role == 'PRESIDENT') != -1) {
        if (this.membre.reunion) {
          this.router.navigateByUrl("president");
        } else {
          this.router.navigateByUrl("/home/createreunion")
        }
      } else if (this.membre.roles.findIndex(i => i.role == 'SECRETAIRE') != -1) {
        this.router.navigateByUrl("secretaire");
      } else if (this.membre.roles.findIndex(i => i.role == 'TRESORIE') != -1) {
        this.router.navigateByUrl("tresorier");
      } else if (this.membre.roles.findIndex(i => i.role == 'COMMISSAIRE_AU_COMPTE') != -1) {
        this.router.navigateByUrl("commissairecompte");
      } else if (this.membre.roles.findIndex(i => i.role == 'SENCEUR') != -1) {
        this.router.navigateByUrl("senceur");
      } else if (this.membre.roles.findIndex(i => i.role == 'ADERANT') != -1) {
        this.router.navigateByUrl("aderant");
      }
    } else {
      this.router.navigateByUrl("");
    }

  }

  takeUserSave() {
    this.membre = JSON.parse(localStorage.getItem("membre"));
    this.jwtokent = localStorage.getItem("token");
    this.navagateTo();
  }
}
