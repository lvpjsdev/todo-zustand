export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

//Не используем Enum из-за особеностей TypeScript
export const TODO_STATE = {
  all: 'all',
  active: 'active',
  completed: 'completed',
} as const;

export type TodoState = keyof typeof TODO_STATE;
