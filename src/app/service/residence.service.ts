import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/core/models/product';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})

export class ResidenceService {

  constructor(private http:HttpClient) { }

  getSameValueOf(list:any[], critiria:string, value:any){
let n=0
    for(let i in list){
      if(list[i][critiria]==value){

        n++
          }
        }
    return n

  }
  
getallresidence():Observable<Residence[]>{
  return this.http.get<Residence[]>("http://localhost:3000/residences/")
}
getallproduct():Observable<Product[]>{
  return this.http.get<Product[]>("http://localhost:3000/products/")
}

addresidence(res:Residence):Observable<Residence[]>{
  return this.http.post<Residence[]>("http://localhost:3000/residences/",res)
}

getbyresidence(id:any):Observable<Residence>{
  return this.http.get<Residence>("http://localhost:3000/residences/"+id)
}
getbyproduct(id:any):Observable<Product>{
  return this.http.get<Product>("http://localhost:3000/products/"+id)
}


deleteresidence(id:any):Observable<Residence>{
  return this.http.delete<Residence>("http://localhost:3000/residences/"+id)
}
deleteproduct(id:any):Observable<Product>{
  return this.http.delete<Product>("http://localhost:3000/products/"+id)
}

updateresidence(id:any,res:Residence):Observable<Residence[]>{
  return this.http.put<Residence[]>("http://localhost:3000/residences/"+id,res)
}
}
