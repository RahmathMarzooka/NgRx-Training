export const TODO_CHECKED = 'TODO_CHECKED';
export const TODO_ADDED = 'TODO_ADDED';
export const FILTER_CHECKED = 'FILTER_CHECKED';

export function checkTodo(todo: any) {
  return {
    type: TODO_CHECKED,
    payload: todo,
  };
}
