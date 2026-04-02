/* eslint-disable no-unused-vars */
import { Header } from "../layout/header/Header";
import { Sidebar } from "../layout/sideBar/Sidebar";
import { useEffect, useState } from "react";
import { PageRoutes } from "./PageRoutes";
import { bgColor } from "../../../styles/colour";
import { setHW } from "../../../styles/gstyle";
import { useNavigate } from "react-router-dom";

const MainAdminPanel = () => {
  const [sideBar, setSideBar] = useState(
    window.screen.width > 990 ? true : false
  );
  // isLoggedIn ----------------------------------------------------------------
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("admin_access_details")) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // isLoggedIn ----------------------------------------------------------------

  return (
    <div
      className="gBox gDrow"
      style={{
        ...{ backgroundColor: bgColor.bodyWhite },
        ...setHW("100vh", "100vw"),
      }}
    >
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      <div className="gBox gContent w-100">
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <PageRoutes />
      </div>
    </div>
  );
};

export default MainAdminPanel;
