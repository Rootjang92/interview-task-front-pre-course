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
        className={`w-5 h-5 rounded-full border transition-all duration-200 flex items-center justify-center peer-focus:ring-4 peer-focus:ring-blue-100 ${checked ? "bg-blue-500 border-none" : "bg-white"}`}
      >
        {checked && <Image src={CheckSVG} alt="Item done checked icon" className="w-3 h-3" />}
      </div>
    </label>
  )
}