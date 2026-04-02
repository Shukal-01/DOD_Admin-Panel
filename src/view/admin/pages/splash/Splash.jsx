import { useEffect } from "react";
import { setHWrtWindow } from "../../../../styles/gstyle";

import { useNavigate } from "react-router-dom";
import { Loader1 } from "../../../../components/loader/Loader1";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {

    setTimeout(() => {
      navigate("/Login");
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="gDflex gDjcc gDaic gContainer "
      style={{ ...setHWrtWindow(100) }}
    >
      <Loader1 />
    </div>
  );
};
