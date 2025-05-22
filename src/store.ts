import { create } from 'zustand';
import type { Todo } from './types';

type TodosState = {
  todos: Todo[];
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export const useTodosStore = create<TodosState>()((set, get) => ({
  todos: [],
  add: (text: string) => {
    set({
      todos: [
        ...get().todos,
        {
          id: (get().todos[get().todos.length - 1]?.id || 0) + 1,
          text,
          completed: false,
        },
      ],
    });

    console.log(get().todos);
  },
  remove: (id: number) => {
    set({ todos: get().todos.filter((todo) => todo.id !== id) });
  },
  toggle: (id: number) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  },
}));
