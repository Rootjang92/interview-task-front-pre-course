import "@testing-library/jest-dom";

import { render, screen, fireEvent } from '@testing-library/react';

import Checkbox from ".";

describe('Checkbox', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('Not checked have basic style and icons.', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    const checkboxDiv = checkbox.nextElementSibling as HTMLElement;
    
    expect(checkbox).not.toBeChecked();
    expect(checkboxDiv).toHaveClass('bg-white');
    expect(checkboxDiv).not.toHaveClass('bg-blue-500');
    expect(checkboxDiv).not.toHaveClass('border-none');
  });

  it('Show checked style.', () => {
    render(<Checkbox checked={true} onChange={mockOnChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    const checkboxDiv = checkbox.nextElementSibling as HTMLElement;
    const checkIcon = screen.getByAltText('Item done checked icon');
    
    expect(checkbox).toBeChecked();
    expect(checkboxDiv).toHaveClass('bg-blue-500');
    expect(checkboxDiv).toHaveClass('border-none');
    expect(checkIcon).toBeInTheDocument();
  });

  it('Called onChange event, when checked.', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('Not show check icon, when not checked.', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} />);
    
    const checkIcon = screen.queryByAltText('Item done checked icon');
    expect(checkIcon).not.toBeInTheDocument();
  });

  it('Label must clickable.', () => {
    render(<Checkbox checked={false} onChange={mockOnChange} />);
    
    const label = screen.getByRole('checkbox').parentElement;
    expect(label).toHaveClass('cursor-pointer');
  });
});