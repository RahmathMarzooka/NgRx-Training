import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { checkTodo } from '../actions';
import { selectAllTodos, selectCompletedTodos, unSelectCompletedTodos } from '../selector';

import store from '../store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  toDoList: any = [];
  todoListForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.todoListForm = this.formBuilder.group({
      todoitem: [''],
    });

    const state = store.getState();
    this.toDoList = selectAllTodos(state);
    store.subscribe(() => {
      let selectedFilter = store.getState().selectedFilter;
      if (selectedFilter === 'completed') {
       this.toDoList = selectCompletedTodos(state)
      }
      if (selectedFilter === 'incompleted') {
        this.toDoList = unSelectCompletedTodos(state)
      }
      if (selectedFilter === 'all') {
        this.toDoList = selectAllTodos(state)
      }
    });
  }

  onChecked(t0DoItem: any) {
    store.dispatch(checkTodo(t0DoItem));
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
