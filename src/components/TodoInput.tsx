import { Input } from 'antd';
import {
  useCallback,
  useState,
  type FC,
  type KeyboardEventHandler,
} from 'react';

interface TodoInputProps {
  onEnter: (value: string) => void;
}

export const TodoInput: FC<TodoInputProps> = ({ onEnter }) => {
  const onPressEnter: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onEnter(e.currentTarget.value);
      e.currentTarget.value = '';
    },
    [onEnter]
  );

  return (
    //Здесь используем не контролируемый инпут, потому что так проще
    <Input placeholder='What needs to be done?' onPressEnter={onPressEnter} />
  );
};
