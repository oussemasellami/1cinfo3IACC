import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //interpolation
  name="salut"

  nameuser="oussema"

  //proprty
  prop=false

  add(){
    console.log("good added")
  }

}
