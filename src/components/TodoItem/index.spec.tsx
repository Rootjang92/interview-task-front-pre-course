import "@testing-library/jest-dom";

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import TodoItem from '.';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}));

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    todoText: '테스트 할일',
    done: false
  };
  
  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    mockOnToggle.mockClear();
    mockOnDelete.mockClear();
  });

  afterEach(() => {
    cleanup(); // 각 테스트 후 cleanup 실행
  });

  it('Render todo text.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    expect(screen.getByText('테스트 할일')).toBeInTheDocument();
  });

  it('When todo done state is false, checkbox checked state is false ', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('When todo done state is true, checkbox checked state is true.', () => {
    const doneTodo = { ...mockTodo, done: true };
    render(<TodoItem todo={doneTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('Called onToggle function when you click checkbox.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const checkbox = screen.getByRole('checkbox');
    
    fireEvent.click(checkbox);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  it('Todo item done state is false, Todo item component have basic text style.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const todoText = screen.getByText('테스트 할일');
    expect(todoText).not.toHaveClass('text-[#868686]');
  });

  it('Todo item done state is true, Todo item component have gray text style.', () => {
    const doneTodo = { ...mockTodo, done: true };
    render(<TodoItem todo={doneTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const todoText = screen.getByText('테스트 할일');
    expect(todoText).toHaveClass('text-[#868686]');
  });

  it('Render delete icon.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const deleteIcon = screen.getByAltText('Delete todo item');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('Called onDelete function when you click delete icon.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const deleteIcon = screen.getByAltText('Delete todo item');
    
    fireEvent.click(deleteIcon);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
  });

  it('Delete icon should be clickable.', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    const deleteIcon = screen.getByAltText('Delete todo item');
    expect(deleteIcon).toHaveClass('cursor-pointer');
  });
});