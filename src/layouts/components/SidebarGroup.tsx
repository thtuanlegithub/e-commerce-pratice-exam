import { useMemo } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { ROUTE_NAME } from "../../helpers/constants/route.constant";
import { capitalize } from "../../helpers/utils/format";
import { SideBarGroupTemplate } from "../types/SideBarGroupTemplate.type";

type SideBarGroupProps = {
  group: SideBarGroupTemplate;
  isFocused: boolean;
};

function SidebarGroup({ group, isFocused }: SideBarGroupProps) {
  const handleNavigation = useMemo(() => {
    switch (group.title) {
      case "dashboard":
        return { to: `${ROUTE_NAME.MAIN}/dashboard` };
      case "product":
        return { to: `${ROUTE_NAME.MAIN}/product` };
      case "customer":
        return { to: `${ROUTE_NAME.MAIN}/customer` };
      case "order":
        return { to: `${ROUTE_NAME.MAIN}/order` };
      default:
        return { to: `${ROUTE_NAME.MAIN}/dashboard` };
    }
  }, [group.title]);

  return (
    <div className="px-2">
      <Link
        target="_self"
        to={handleNavigation.to}
        title={group.title}
        className={twMerge(
          "flex flex-col px-4 py-4 cursor-pointer hover:bg-blue-50 hover:rounded-xl hover:px-4",
          isFocused && "bg-blue-100 rounded-xl px-4"
        )}
      >
        <div className="flex items-center gap-4">
          {group.icon}
          <span>{capitalize(group.title)}</span>
        </div>
        {isFocused && (
          <div>
            {group.items?.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
}

export default SidebarGroup;
