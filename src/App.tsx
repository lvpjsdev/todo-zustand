import { Typography, Flex, Radio, Button } from 'antd';
// import './App.css';
import { TodoInput } from './components/TodoInput';
import { useTodosStore } from './store';
import { TodosList } from './components/TodosList/TodosList';
import { useState } from 'react';
import type { TodoState } from './types';
import { TodoStatusSelector } from './components/TodoStatusSelect';

function App() {
  const [todoState, setTodoState] = useState<TodoState>('all');
  const addTodo = useTodosStore((state) => state.add);
  const todos = useTodosStore((state) => state.todos);

  return (
    <>
      <Typography.Title>todos</Typography.Title>
      <div className='card'>
        <TodoInput onEnter={addTodo} />
        <TodosList todos={todos} status={todoState} />
      </div>
      <footer>
        <span>counter lefts</span>
        <TodoStatusSelector value={todoState} onChange={setTodoState} />
        <Button type='primary'>Clear completed</Button>
      </footer>
    </>
  );
}

export default App;
