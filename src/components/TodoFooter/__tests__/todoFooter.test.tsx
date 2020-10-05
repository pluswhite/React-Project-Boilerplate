import React from 'react';
import { render } from '@testing-library/react';
import TodoFooter, { ITodoFooter } from '../todoFooter';
import { VisibilityType } from '@constants/todos';

const defaultProps: ITodoFooter = {
  todos: [
    {
      id: '123456789',
      text: 'demo item',
      isCompleted: true,
    },
  ],
  visibility: VisibilityType.ALL,
  dispatch: jest.fn(),
};

describe('TodoFooter component test', () => {
  it('should render the default TodoFooter correctly', () => {
    const { getByTestId } = render(
      <TodoFooter data-testid="test-demo" {...defaultProps} />,
    );
    const elm = getByTestId('test-demo');

    expect(elm).toBeInTheDocument();
    expect(elm).toHaveClass('footer');
  });
});
