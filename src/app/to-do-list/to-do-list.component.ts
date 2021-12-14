import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  toDoList: any = [
    {
      title: "Go to gym",
      isChecked: false,
    },
    {
      title: "Buy milk",
      isChecked: false,
    },
    {
      title: "Write article",
      isChecked: false,
    },
    {
      title: "go to market",
      isChecked: false,
    },
    {
      title: "study for one hour",
      isChecked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}


  isChecked(){
    console.log('checked')
  }
}
