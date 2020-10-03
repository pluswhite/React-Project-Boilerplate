import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../todoForm';
import { ITodoList } from '@components/TodoList/todoList';

const defaultProps: ITodoList = {
  field: 'demo',
  className: 'demo',
  children: <>Todo@babel/preset-reactList</>,
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
