import { Typography, Input, Checkbox, Flex, Radio, Button } from 'antd';
import './App.css';

function App() {
  return (
    <>
      <Typography.Title>todos</Typography.Title>
      <div className='card'>
        <Input placeholder='What needs to be done?' />
        <div>
          <Checkbox>Hello World</Checkbox>
          <Checkbox>Hello World</Checkbox>
          <Checkbox>Hello World</Checkbox>
        </div>
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
