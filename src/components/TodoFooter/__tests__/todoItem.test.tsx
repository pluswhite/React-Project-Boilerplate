import React from 'react';
import { render } from '@testing-library/react';
import TodoFooter from '../todoFooter';
import { ITodoForm } from '@components/TodoForm/todoForm';

const defaultProps: ITodoForm = {
  field: 'demo',
  className: 'demo',
  children: <>TodoForm</>,
};

describe('TodoForm component test', () => {
  it('should render the default TodoForm correctly', () => {
    const { getByTestId } = render(
      <TodoFooter data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('demo');
  });
});
