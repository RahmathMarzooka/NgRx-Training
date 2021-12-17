export function selectAllTodos(state: any) {
  return state.allTodos;
}

export function selectCompletedTodos(state: any) {
  let allTodos = state.allTodos;
  return allTodos.filter((todo: any) => {
    return todo.isChecked;
  });
}

export function unSelectCompletedTodos(state: any) {
  let allTodos = state.allTodos;
  return allTodos.filter((todo: any) => {
    return !todo.isChecked;
  });
}
