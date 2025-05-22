import { Typography, Collapse, Button, Flex } from 'antd';
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
      <div>
        <Typography.Title>todos</Typography.Title>
        <Collapse
          defaultActiveKey={1}
          items={[
            {
              key: 1,
              label: <TodoInput onEnter={addTodo} />,
              children: <TodosList todos={todos} status={todoState} />,
            },
          ]}
          collapsible='icon'
        />
      </div>
      <footer style={{ paddingTop: 8 }}>
        <Flex gap='small' justify='space-between'>
          <Typography.Text>
            {unDoneCount} item{unDoneCount > 1 ? 's' : ''} left
          </Typography.Text>
          <TodoStatusSelector value={todoState} onChange={setTodoState} />
          <Button type='text' onClick={clearDone}>
            Clear completed
          </Button>
        </Flex>
      </footer>
    </>
  );
}

export default App;
