import { Typography, Flex, Collapse, Button } from 'antd';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { useTodosStore } from './store';
import { TodosList } from './components/TodosList/TodosList';
import { useState } from 'react';
import type { TodoState } from './types';
import { TodoStatusSelector } from './components/TodoStatusSelect';

function App() {
  const [todoState, setTodoState] = useState<TodoState>('all');
  const addTodo = useTodosStore((state) => state.add);
  const clearDone = useTodosStore((state) => state.clearDone);
  const todos = useTodosStore((state) => state.todos);
  const unDoneCount = useTodosStore(
    (state) => state.todos.filter((todo) => !todo.completed).length
  );

  return (
    <>
      <Typography.Title>todos</Typography.Title>
      <Collapse
        items={[
          {
            label: <TodoInput onEnter={addTodo} />,
            children: <TodosList todos={todos} status={todoState} />,
          },
        ]}
      />
      <footer>
        <span>
          {unDoneCount} item{unDoneCount > 1 ? 's' : ''} left
        </span>
        <TodoStatusSelector value={todoState} onChange={setTodoState} />
        <Button type='primary' onClick={clearDone}>
          Clear completed
        </Button>
      </footer>
    </>
  );
}

export default App;
