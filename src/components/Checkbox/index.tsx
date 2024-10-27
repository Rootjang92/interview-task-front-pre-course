import Image from "next/image";

import CheckSVG from "../../public/icons/Check.svg";

interface Props {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked, onChange }: Props) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      <div 
        className={`w-[32px] h-[32px] rounded-full border transition-all duration-200 flex items-center justify-center ${checked ? "bg-blue-500 border-none" : "bg-white"}`}
      >
        {checked && <Image src={CheckSVG} alt="Item done checked icon" />}
      </div>
    </label>
  )
};

export default Checkbox;