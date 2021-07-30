import {Reunion} from "./Reunion";
import {Roles} from "./Roles";

export class Membres{
  idmembre:number;
  nomcomplet:string;
  cni:string;
  sexe:string;
  telephone:string;
  datenaissance:Date;
  username:string;
  emails:string;
  statut:boolean;
  image:string;
  password:string;
  role:string;
  roles:Roles[];
  reunion:Reunion;
  referent_reunion:string;
}
