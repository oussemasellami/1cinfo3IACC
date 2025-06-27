import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../service/residence.service';


@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {


constructor(private residenceService:ResidenceService){

}

listresidenceDataBase:Residence[]=[]
  ngOnInit(): void {
  this.residenceService.getallresidence().subscribe((data)=>{
  this.listresidenceDataBase=data
  console.log(this.listresidenceDataBase)
  })

  }

listfavorie:Residence[]=[]
  listResidences:Residence[]=[
   {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
    {id:2,"name": "El fel", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
  ];

  search=""
showlocation(r:Residence){
  if(r.address !="inconnu"){
alert('adress'+r.address)
  }else{
alert('inconnu')
  }

}

like(r:Residence){
  if(this.listfavorie.includes(r)){
    alert('deja ajouter')
  }else{
    this.listfavorie.push(r)
  }
}

searchbyname(){
  return this.listresidenceDataBase.filter(r=>r.name.toLowerCase()
  .includes(this.search.toLowerCase()))
}

num!:number
shownumber(){
  return this.num=this.residenceService.getSameValueOf(this.listResidences,"name","El fel")

}

supprime(id:any){
  this.residenceService.deleteresidence(id).subscribe(()=>{
    //console.log('deleted!!!')
    this.ngOnInit()
  })

}

}
