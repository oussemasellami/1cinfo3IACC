import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  constructor(private service:ResidenceService , private r:Router){}
 

  addF!:FormGroup

   ngOnInit(): void {
   this.addF=new FormGroup({

  id: new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  address: new FormControl('',Validators.required),
  image: new FormControl('../../assets/images/residence1.jpg',Validators.required),
  status: new FormControl('',Validators.required)

   })
  }

  add(){

    console.log(this.addF.value)
    this.service.addresidence(this.addF.value).subscribe(()=>{
      console.log("added");
      this.r.navigateByUrl("residence")
      



    })

  }

}
