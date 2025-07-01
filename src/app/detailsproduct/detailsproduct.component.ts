import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Product } from 'src/core/models/product';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit{

    constructor(private act:ActivatedRoute,private resService:ResidenceService){}
  getresidence=new Product()
      id!:number
    ngOnInit(): void {
      this.id=this.act.snapshot.params['id']
      this.resService.getbyproduct(this.id).subscribe((data)=>{
  this.getresidence=data
  console.log(this.getresidence)
      })
    }

}
