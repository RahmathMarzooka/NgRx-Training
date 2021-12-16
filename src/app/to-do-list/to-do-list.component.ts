
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import store from '../store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  @Input() toDoList: any = [];
  todoListForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.todoListForm = this.formBuilder.group({
      todoitem: [''],
    });

    this.toDoList = store.getState().allTodos;
    store.subscribe(() => {
      this.toDoList = store.getState().allTodos;
    });
  }

  isChecked(t0DoItem: any) {
    store.dispatch({
      type: 'TODO_CHECKED',
      payload: t0DoItem,
    });
  }

  onSubmit(data: any) {
    store.dispatch({
      type: 'TODO_ADDED',
      payload: data.todoitem,
    });
    this.clearInput();
  }

  clearInput() {
    this.todoListForm.reset();
  }

  getToDoList(toDoList: any) {
    this.toDoList = toDoList;
  }
}
