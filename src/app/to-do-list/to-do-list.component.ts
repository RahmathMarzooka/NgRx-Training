import { Component, OnInit } from "@angular/core";
import store from '../store';

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  toDoList: any = [];

  constructor() {}

  ngOnInit(): void {
    this.toDoList = store.getState().allTodos;
    store.subscribe(() => {
      this.toDoList = store.getState().allTodos;
    })
  }


  isChecked(t0DoItem:any){
    store.dispatch({
      type:'TODO_CHECKED',
      payload:t0DoItem
    })
  }
}


