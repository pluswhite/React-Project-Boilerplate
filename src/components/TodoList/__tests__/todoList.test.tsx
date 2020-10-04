import React from 'react';
import { render } from '@testing-library/react';
import TodoList, { ITodoList } from '../todoList';

const defaultProps: ITodoList = {
  todos: [
    {
      id: '123456789',
      text: 'demo item',
      isCompleted: true,
    },
  ],
  dispatch: jest.fn(),
};

describe('TodoList component test', () => {
  it('should render the default TodoList correctly', () => {
    const { getByTestId } = render(
      <TodoList data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('demo');
  });
});
