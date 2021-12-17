export const TODO_CHECKED = 'TODO_CHECKED';

export function checkTodo(todo: any) {
  return {
    type: TODO_CHECKED,
    payload: todo,
  };
}
