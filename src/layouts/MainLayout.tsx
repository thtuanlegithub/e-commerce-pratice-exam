import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LAYOUT_SIDEBAR_ADMIN } from "../helpers/constants/layout.constant";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [focusedTitles, setFocusedTitles] = useState<
    [string | undefined, string | undefined]
  >([undefined, undefined]);

  const location = useLocation();

  const sidebarGroupTemplate = useMemo(() => LAYOUT_SIDEBAR_ADMIN, []);

  useEffect(() => {
    const path = location.pathname;
    const pathArray = path
      .split("/")
      .filter((item) => item !== "" && item !== "admin");
    if (pathArray.length === 0) {
      setFocusedTitles([undefined, undefined]);
      return;
    }
    if (pathArray.length === 1) {
      setFocusedTitles([pathArray[0], undefined]);
      return;
    }
    setFocusedTitles([pathArray[0], pathArray[1]]);
  }, [location.pathname, sidebarGroupTemplate]);

  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <div className="flex flex-row flex-1">
        <Sidebar focusedTitles={focusedTitles} groups={LAYOUT_SIDEBAR_ADMIN} />
        <div className="flex-1 shadow-md pl-4 pt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
