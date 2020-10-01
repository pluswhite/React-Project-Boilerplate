import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem, { ITodoItem } from '../todoItem';

const defaultProps: ITodoItem = {
  field: 'demo',
  className: 'demo',
  children: <>TodoItem</>,
};

describe('TodoItem component test', () => {
  it('should render the default TodoItem correctly', () => {
    const { getByTestId, getByText } = render(
      <TodoItem data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('demo');
  });
});
