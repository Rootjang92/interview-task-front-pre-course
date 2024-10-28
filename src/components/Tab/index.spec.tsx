import "@testing-library/jest-dom";

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Tab from ".";

import { TabType } from "../../types/todo";

describe('Tab', () => {
  const defaultProps = {
    value: 'all' as const,
    label: '전체',
    activeTab: 'all' as const,
    onTabChange: jest.fn()
  };

  beforeEach(() => {
    defaultProps.onTabChange.mockClear();
  });

  it('Correct render label.', () => {
    render(<Tab {...defaultProps} />);
    expect(screen.getByText('전체')).toBeInTheDocument();
  });

  it('Active tab has active styles.', () => {
    render(<Tab {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-[#2182F3]');
    expect(button).toHaveClass('bg-[#EBF4FF]');
  });

  it('Inactive tab as basic styles.', () => {
    render(<Tab {...defaultProps} activeTab="done" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-#454545');
    expect(button).not.toHaveClass('bg-[#EBF4FF]');
  });

  it('Called onTabChange.', () => {
    render(<Tab {...defaultProps} />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    
    expect(defaultProps.onTabChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onTabChange).toHaveBeenCalledWith('all');
  });

  it('All tabtype working test.', () => {
    const tabTypes: Array<{ value: TabType, label: string }> = [
      { value: 'all', label: '전체' },
      { value: 'todo', label: '할 일' },
      { value: 'done', label: '완료' }
    ];

    tabTypes.forEach(({ value, label }) => {
      const onTabChange = jest.fn();
      render(
        <Tab
          value={value}
          label={label}
          activeTab="all"
          onTabChange={onTabChange}
        />
      );

      const button = screen.getByText(label);
      fireEvent.click(button);
      
      expect(onTabChange).toHaveBeenCalledWith(value);
      cleanup();
    });
  });


  it('Check tab change style for active tab changed.', () => {
    // 활성화된 탭 테스트
    const { rerender } = render(<Tab {...defaultProps} activeTab="all" value="all" />);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('text-[#2182F3]');
    expect(button).toHaveClass('bg-[#EBF4FF]');

    // 비활성화된 탭 테스트
    rerender(<Tab {...defaultProps} activeTab="done" value="all" />);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-#454545');
    expect(button).not.toHaveClass('bg-[#EBF4FF]');
    expect(button).toHaveClass('hover:text-[#2182F3]');
  });

  it('Render button.', () => {
    render(<Tab {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
  });
});