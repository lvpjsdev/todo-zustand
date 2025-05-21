import { useTodosStore } from '../../store';
import { TodoItem } from './TodoItem';

export const TodosList = () => {
  const todos = useTodosStore((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
