import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../shared/services/constants.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(public constantsService: ConstantsService) {
  }

  selectedState;
  selectedCity;
  cityList = []

  setSelected(selectedState) {
    this.selectedState = selectedState;
    for (const state of this.constantsService.stateCity) {
      if (state.stateName === this.selectedState) {
        this.cityList = state.city;
      }
    }
  }

  ngOnInit(): void {
  }

}






