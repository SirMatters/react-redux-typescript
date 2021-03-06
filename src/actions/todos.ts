import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'http://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  id: number;
}

export function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: ActionTypes.deleteTodo,
    id,
  };
}
