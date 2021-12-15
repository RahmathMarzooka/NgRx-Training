import { Component, OnInit } from '@angular/core';
import store from '../store';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {
  toDoList:any;
  completedTodoList:any
  incompletedTodoList:any
  constructor() { }

  ngOnInit(): void {
    this.toDoList = store.getState().allTodos

    this.completedTodoList = store.getState().completedTodos;
    store.subscribe(() => {
      this.completedTodoList = store.getState().completedTodos;
      this.incompletedTodoList =store.getState().incompletedTodos;
    });
  }

  showCompletedItem(){
    store.dispatch({
      type: 'SHOW_COMPLETED',
      payload:this.toDoList
    })

  }

  showIncompletedItem(){
    store.dispatch({
      type: 'SHOW_INCOMPLETED',
      payload:this.toDoList
    })
  }
}
