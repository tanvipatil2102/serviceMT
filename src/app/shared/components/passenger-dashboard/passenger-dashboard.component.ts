import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passArr !: Array<Ipassenger>;
  checkInCount !: number;
  constructor(
    private _passService : PassengerService
  ) { }

  ngOnInit(): void {
    this.passArr = this._passService.fetchAllPAssengers();
    this.getCheckInCount();
  }

  getCheckInCount(){
     this.checkInCount = this.passArr.filter(num => {
      return num.checkedIn
    }).length

  }

  getArr(event : any){
    this.getCheckInCount();
  }

}
