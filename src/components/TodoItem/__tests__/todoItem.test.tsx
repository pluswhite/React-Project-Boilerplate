import React from 'react';
import { render } from '@testing-library/react';
import TodoItem, { ITodoItem } from '../todoItem';

const defaultProps: ITodoItem = {
  todo: {
    id: '123456789',
    text: 'demo item',
    isCompleted: true,
  },
  dispatch: jest.fn(),
};

describe('TodoItem component test', () => {
  it('should render the default TodoItem correctly', () => {
    const { getByTestId } = render(
      <TodoItem data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('todo-item');
  });
});
