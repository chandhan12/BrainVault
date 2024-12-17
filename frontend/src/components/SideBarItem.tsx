import { ReactElement } from "react";
import { activeTab } from "../atoms";
import { useRecoilValue } from "recoil";

const SideBarItem = ({
    icon,
    text,
}: {
    text: string; 
    icon: ReactElement;
}) => {
    const activeTabValue = useRecoilValue(activeTab);

    return (
        <div
            className={`flex cursor-pointer hover:bg-slate-300 rounded max-w-64 transition-all duration-200 ${
                activeTabValue === text ? "bg-slate-300" : ""
            }`}
        >
            <div className="p-2 text-gray-900">{icon}</div>
            <div className="p-2 text-gray-900 text-lg">{text}</div>
        </div>
    );
};

export default SideBarItem;
