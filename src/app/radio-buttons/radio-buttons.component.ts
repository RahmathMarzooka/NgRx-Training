import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import store from "../store";

@Component({
  selector: "app-radio-buttons",
  templateUrl: "./radio-buttons.component.html",
  styleUrls: ["./radio-buttons.component.scss"],
})
export class RadioButtonsComponent implements OnInit {
  toDoList: any;
  completedTodoList: any;
  incompletedTodoList: any;
  @Output() todoEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    
    store.subscribe(() => {
      let toDos = store.getState().allTodos;
      this.completedTodoList = toDos.filter((t: any) => {
        return t.isChecked == true;
      });
      this.incompletedTodoList = toDos.filter((t: any) => {
        return t.isChecked == false;
      });
    });
  }

  showAllItems() {
    store.dispatch({
      type: "SHOW_ALL",
    });
    this.toDoList = store.getState().allTodos;
    this.emitToDoList(this.toDoList);
  }

  showCompletedItems() {
    store.dispatch({
      type: "SHOW_COMPLETED",
    });
    this.toDoList = this.completedTodoList;
    this.emitToDoList(this.toDoList);
  }

  showIncompletedItems() {
    store.dispatch({
      type: "SHOW_INCOMPLETED",
    });
    this.toDoList = this.incompletedTodoList;
    this.emitToDoList(this.toDoList);
  }

  emitToDoList(toDoList: any) {
    this.todoEvent.emit(toDoList);
  }
}
