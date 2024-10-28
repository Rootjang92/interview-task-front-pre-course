import { TabType } from "../../types/todo";

interface Props {
  activeTab: TabType;
  value: TabType;
  label: string;
  onTabChange: (tab: TabType) => void;
}

const Tab = ({ activeTab, value, label, onTabChange }: Props) => {
  return (
    <button 
      onClick={() => onTabChange(value)}
      className={`px-8 py-2 text-[16px] rounded-md transition-all duration-200 font-semibold ${activeTab === value ? "text-[#2182F3] bg-[#EBF4FF]" : "hover:text-[#2182F3] text-#454545"}`}
    >
      {label}
    </button>
  )
};

export default Tab;