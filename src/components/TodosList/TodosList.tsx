import { useMemo, type FC } from 'react';
import { TODO_STATE, type Todo, type TodoState } from '../../types';
import { TodoItem } from './TodoItem';

interface TodosListProps {
  todos: Todo[];
  status: TodoState;
}

export const TodosList: FC<TodosListProps> = ({ todos, status }) => {
  const showedTodos = useMemo(() => {
    if (status === TODO_STATE.all) {
      return todos;
    }
    return todos.filter(
      (todo) => todo.completed === (status === TODO_STATE.completed)
    );
  }, [todos, status]);

  return (
    <div>
      {showedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
