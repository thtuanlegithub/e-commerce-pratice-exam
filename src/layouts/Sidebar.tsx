import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import SidebarGroup from "./components/SidebarGroup";
import { SideBarGroupTemplate } from "./types/SideBarGroupTemplate.type";

type SideBarProps = {
  className?: string;
  groups: SideBarGroupTemplate[];
  focusedTitles: [string | undefined, string | undefined];
};

function Sidebar({ className, groups, focusedTitles }: SideBarProps) {
  const location = useLocation();
  return (
    <aside className={twMerge("h-full w-64", className)}>
      {groups.map((group, index) => (
        <div key={index}>
          <SidebarGroup
            group={group}
            isFocused={
              focusedTitles[0] === group.title &&
              location.pathname.includes(group.title)
            }
          />
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
