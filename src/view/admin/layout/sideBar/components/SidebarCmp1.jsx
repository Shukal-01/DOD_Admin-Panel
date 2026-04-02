/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { textColor } from "../../../../../styles/colour";
export const SidebarCmp1 = ({ value, setSideBar }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(value.to);
    if (window.screen.width < 991) {
      setSideBar(false);
    }
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="gCPointer p-3 pt-1 pb-3"
    >
      <div className="gDflex gDaic mainSidebar" style={{ minWidth: 175 }}>
        <span style={{ width: 25, textAlign: "center" }}>
          <img src={value.icon} height={19} />
        </span>
        <span
          className="tw_500 ps-3"
          style={{ ...{ color: textColor.sideBarTextColor } }}
        >
          {value.name}
        </span>
      </div>
    </div>
  );
};
