import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private act:ActivatedRoute,private resService:ResidenceService){}
getresidence=new Residence()
    id!:number
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']
    this.resService.getbyresidence(this.id).subscribe((data)=>{
this.getresidence=data
console.log(this.getresidence)
    })
  }





}
