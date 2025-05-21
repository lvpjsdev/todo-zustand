import { Typography, Checkbox, Flex, Radio, Button } from 'antd';
// import './App.css';
import { TodoInput } from './components/TodoInput';
import { useTodosStore } from './store';
import { TodosList } from './components/TodosList/TodosList';

function App() {
  const addTodo = useTodosStore((state) => state.add);

  return (
    <>
      <Typography.Title>todos</Typography.Title>
      <div className='card'>
        <TodoInput onEnter={addTodo} />
        <TodosList />
      </div>
      <footer>
        <span>counter lefts</span>
        <Flex gap='middle'>
          <Radio.Group defaultValue={'all'}>
            <Radio value='all'>All</Radio>
            <Radio value='active'>Active</Radio>
            <Radio value='completed'>Completed</Radio>
          </Radio.Group>
        </Flex>
        <Button type='primary'>Clear completed</Button>
      </footer>
    </>
  );
}

export default App;
