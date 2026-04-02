import { useEffect, useState } from "react";
import { setHW } from "../../../../styles/gstyle";
import { Input1 } from "../../../../components/input/Input1";

import logo from "../../../../assets/core/dod_logo.png";
import LoginPageImg from "../assets/LoginPageImg.png";
import emailIcon from "../../../../assets/icons/email.png";
import lockIcon from "../../../../assets/icons/lock.png";
import { Button1 } from "../../../../components/button/Button1";
import { Link, useNavigate } from "react-router-dom";
import { textColor } from "../../../../styles/colour";
import { Loader2 } from "../../../../components/loader/Loader2";
import { handleLogin } from "../../../../services/profile/profileServices";
import { useCookies } from "react-cookie";

export const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["admin_access_token"]);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginFunc = (e) => {
    e.preventDefault();
    setIsLoading(true);

    handleLogin(setIsLoading, email, password, setCookie);
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_access_details")) {
      navigate("/admin/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 gDflex gDjcc">
          <div style={{ ...{ paddingTop: "2vh", paddingBottom: "2vh" } }}>
            <img
              src={LoginPageImg}
              style={{
                ...{ maxHeight: "96vh" },
                ...setHW("100%", "100%"),
              }}
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="gDflex gDaic   text-center"
            style={{
              ...setHW("100%"),
            }}
          >
            <div className="w-100">
              <div>
                <div className="mb-4">
                  <img src={logo} alt="" style={{ ...setHW(100) }} />
                </div>
                <div>
                  <span className="h3">Login!</span>
                </div>
                <form onSubmit={handleLoginFunc} className="mb-5">
                  <Input1
                    icon={emailIcon}
                    placeholder="Enter your email address"
                    type="email"
                    givenState={email}
                    givenStateSetter={setEmail}
                  />
                  <Input1
                    icon={lockIcon}
                    placeholder="Enter your password"
                    type="password"
                    givenState={password}
                    givenStateSetter={setPassword}
                  />
                  <div className="mb-5">
                    <Link
                      style={{ color: textColor.color2 }}
                      to={"/forgetPassword"}
                    >
                      Forget Password
                    </Link>
                  </div>
                  {isLoading && <Loader2 />}
                  <Button1 type="submit" title="Login" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
