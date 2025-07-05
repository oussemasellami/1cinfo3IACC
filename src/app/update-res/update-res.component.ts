import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/residence';
@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrls: ['./update-res.component.css']
})
export class UpdateResComponent implements OnInit {

   constructor(private service:ResidenceService , 
    private r:Router,
    private act:ActivatedRoute){}
   
  idupdate!:any
  listres=new Residence()
    addF!:FormGroup
  
     ngOnInit(): void {
      this.idupdate=this.act.snapshot.params['id']
     this.addF=new FormGroup({
  
    //id: new FormControl('',[Validators.required,Validators.pattern(/^[1-9]/)]),
    name: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    address: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    image: new FormControl('../../assets/images/residence1.jpg',Validators.required),
    status: new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)])
  
     })

     this.service.getbyresidence(this.idupdate).subscribe((data)=>{
      this.listres=data
      this.addF.patchValue(this.listres as any)
     })
    }
  
    add(){
  
      console.log(this.addF.value)
      this.service.updateresidence(this.idupdate,this.addF.value).subscribe(()=>{
        console.log("added");
        this.r.navigateByUrl("residence")
  
      })

}
}
