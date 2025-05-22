import { useCallback, type FC } from 'react';
import { TODO_STATE, type TodoState } from '../types';
import { Radio, type RadioChangeEvent } from 'antd';

interface TodoStatusSelectorProps {
  value: TodoState;
  onChange: (value: TodoState) => void;
}

export const TodoStatusSelector: FC<TodoStatusSelectorProps> = ({
  value,
  onChange,
}) => {
  const onChangeValue = useCallback(
    (e: RadioChangeEvent) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Radio.Group value={value} onChange={onChangeValue}>
      {Object.keys(TODO_STATE).map((key) => (
        <Radio
          key={key}
          value={TODO_STATE[key as TodoState]}
          style={{ textTransform: 'capitalize' }}
        >
          {TODO_STATE[key as TodoState]}
        </Radio>
      ))}
    </Radio.Group>
  );
};
