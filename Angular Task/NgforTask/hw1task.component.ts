import { Component } from '@angular/core';

@Component({
  selector: 'app-hw1task',
  templateUrl: './hw1task.component.html',
  styleUrl: './hw1task.component.css'
})
export class Hw1taskComponent {

  bikes:string[]=['HeroHond','BMW','Yahama','JavaBike','Bajaj']
  cars:string[]=['Suzuki Swift','Hyundai','Mahindra','kia','Renault']
  clicke:string[]=[]
  bikeClick=()=> this.clicke=this.bikes
  carClick=()=> this.clicke=this.cars
  liClick=(item : string)=>this.data=item
  data:string=""

}
