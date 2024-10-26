import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { ChangeEvent } from "react";
import Input from ".";

describe("input component", () => {
  const mockOnChange = jest.fn<void, [ChangeEvent<HTMLInputElement>]>();
  const mockOnEnter = jest.fn();

  const defaultProps = {
    value: "",
    onChange: mockOnChange,
    onEnter: mockOnEnter
  };

  beforeEach(() => {
    jest.clearAllMocks()
  });

  it("input component placeholder", () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByPlaceholderText("할 일을 입력해 주세요.")).toBeInTheDocument();
  });

  it('displays the value prop correctly', () => {
    render(<Input {...defaultProps} value="테스트 할 일" />);
    const inputElement = screen.getByDisplayValue('테스트 할 일');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    
    fireEvent.change(inputElement, { target: { value: '새로운 할 일' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('calls onEnter when Enter key is pressed', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    expect(mockOnEnter).toHaveBeenCalled();
  });

  it('does not call onEnter when other keys are pressed', () => {
    render(<Input {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    
    fireEvent.keyDown(inputElement, { key: 'Space' });
    expect(mockOnEnter).not.toHaveBeenCalled();
  });
})