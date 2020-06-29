import { Todo, ActionTypes, Action } from '../actions';

export const todos = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return [...state].filter((todo: Todo) => todo.id !== action.id);
    default:
      return state;
  }
};
