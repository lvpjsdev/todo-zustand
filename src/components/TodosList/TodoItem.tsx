import { Checkbox } from 'antd';
import { useTodosStore } from '../../store';
import type { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const toggle = useTodosStore((state) => state.toggle);

  return (
    <Checkbox
      checked={todo.completed}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onChange={() => toggle(todo.id)}
    >
      {todo.text}
    </Checkbox>
  );
};
