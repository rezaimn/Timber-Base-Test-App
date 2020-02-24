export class ItemsModel {
  id: number;
  name:string;
  description:string;
  unitCost:number;
  qtyHrRate: number;
  amount: number;

  constructor(data:any={}) {
   this.id=data.id||0;
   this.name=data.name||'';
   this.description=data.description||'';
   this.unitCost=data.unitCost||0;
   this.qtyHrRate=data.qtyHrRate||0;
   this.amount=data.amount||0;


  }

}
