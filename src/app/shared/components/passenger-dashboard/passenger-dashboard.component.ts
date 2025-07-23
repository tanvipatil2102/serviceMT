import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

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
    this.passArr = this._passService.fetchAllPassengers();
    this.getCheckInCount()
  }

  getCheckInCount(){
    this.checkInCount = this.passArr.filter(num => num.checkedIn).length;
  }

  removeFum($event : any){
    this.getCheckInCount()
  }

}
