type TabType = "all" | "todo" | "done";

interface Props {
  activeTab: TabType;
  value: TabType;
  label: string;
  onTabChange: (tab: TabType) => void;
}

const Tab = ({ activeTab, value, label, onTabChange }: Props) => {
  return (
    <button 
      key={value} 
      onClick={() => onTabChange(value)}
      className={`flex-1 px-4 py-2 text-sm rounded-md transition-all duration-200 ${activeTab === value ? "text-blue-600 shadow-sm" : "hover:text-blue-600"}`}
    >
      {label}
    </button>
  )
};

export default Tab;