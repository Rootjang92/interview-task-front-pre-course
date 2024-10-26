import { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}

const Input = ({ value, onChange, onEnter }: Props) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <input 
      className="w-full p-[32px] mb-6 rounded-3xl bg-[#E5E5E5] mt-10 text-[20px] placeholder:text-[#B9B9B9] focus:outline-none" 
      type="text" 
      value={value} 
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder="할 일을 입력해 주세요." 
    />
  )
};

export default Input;