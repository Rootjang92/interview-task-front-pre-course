import { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

const Input = ({ value, onChange, onEnter }: Props) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return <input type="text" value={value} onChange={onChange} placeholder="할 일을 입력해 주세요." />
};

export default Input;