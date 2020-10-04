import React from 'react';
import { render } from '@testing-library/react';
import TodoForm, { ITodoForm } from '../todoForm';

const defaultProps: ITodoForm = {
  // handleTodoCreate: jest.fn(),
  dispatch: jest.fn(),
};

describe('TodoForm component test', () => {
  it('should render the default TodoForm correctly', () => {
    const { getByTestId } = render(
      <TodoForm data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('todo-form');
  });
});
