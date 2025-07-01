import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/models/product';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  constructor(private residenceService:ResidenceService){
  
  }
  
  listresidenceDataBase:Product[]=[]
    ngOnInit(): void {
    this.residenceService.getallproduct().subscribe((data)=>{
    this.listresidenceDataBase=data
    console.log(this.listresidenceDataBase)
    })
  
    }

    supprime(id:any){
  this.residenceService.deleteproduct(id).subscribe(()=>{
    //console.log('deleted!!!')
    this.ngOnInit()
  })

}
}