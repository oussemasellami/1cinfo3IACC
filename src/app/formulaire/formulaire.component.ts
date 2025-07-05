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

  //id: new FormControl('',[Validators.required,Validators.pattern(/^[1-9]/)]),
  name: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
  address: new FormControl('',[Validators.required,Validators.maxLength(10)]),
  image: new FormControl('../../assets/images/residence1.jpg',Validators.required),
  status: new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)])

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
