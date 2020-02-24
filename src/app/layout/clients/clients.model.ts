export class ClientsModel {
  id:number;
  name:string;
  address:string;
  phone:string;
  email:string;
  constructor(data:any={}){
    this.id=data.id||0;
    this.name=data.name||'';
    this.address=data.address||'';
    this.phone=data.phone||'';
    this.email=data.email||'';
  }
}
