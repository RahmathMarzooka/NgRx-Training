import { compileDeclarePipeFromMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import store from "../store";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  toDoList: any = [];
  todoListForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.todoListForm = this.formBuilder.group({
      todoitem: [""],
    });

    this.toDoList = store.getState().allTodos;
    store.subscribe(() => {
      this.toDoList = store.getState().allTodos;
    });
  }

  isChecked(t0DoItem: any) {
    store.dispatch({
      type: "TODO_CHECKED",
      payload: t0DoItem,
    });
  }

  onSubmit(data: any) {
    store.dispatch({
      type: "TODO_ADDED",
      payload: data.todoitem,
    });
    this.emptyInput()
  }
  emptyInput(){
    this.todoListForm.reset()
  }
}
