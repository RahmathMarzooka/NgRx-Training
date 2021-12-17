import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import store from "../store";

@Component({
  selector: "app-radio-buttons",
  templateUrl: "./radio-buttons.component.html",
  styleUrls: ["./radio-buttons.component.scss"],
})
export class RadioButtonsComponent implements OnInit {
  selectedFilter:string = 'all';
  constructor() {}

  ngOnInit(): void {
    store.subscribe(() => {
      let selectedFilter = store.getState().selectedFilter;
      this.selectedFilter = selectedFilter;
    })
  }

  isChecked(filterName:string){
    return this.selectedFilter == filterName;
  }

  radioChecked(selectedFilter:String){
    store.dispatch({
      type:'FILTER_CHECKED',
      payload:{
        selectedFilter
      }
    })
  }



}
