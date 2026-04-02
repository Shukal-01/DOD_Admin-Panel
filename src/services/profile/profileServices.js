import globalVariable from "../../data/globalVariable";
import url from "../../data/Urls";

export const handleLogin = (setIsLoading, email, password, setCookie) => {
  let form_data = new FormData();
  form_data.append("email", email);
  form_data.append("password", password);

  fetch(url.login, {
    method: "POST",
    body: form_data,
  })
    .then((v) => v.json())
    .then((v) => {
      if (v.message === "success") {
        const now = new Date();
        setCookie("admin_access_token", v.data.token, {
          path: "/",
          secure: true,
          sameSite: "None",
          expires: new Date(now.getTime() + 10 * 60 * 60 * 1000),
        });

        globalVariable.accessToken = v.data.token;
        sessionStorage.setItem(
          "admin_access_details",
          JSON.stringify(v.data.userData)
        );
        alert("login success");
        window.location.reload();
      } else {
        alert("Invalid Credentials");
      }
    })
    .catch((err) => {
      alert(
        "something went wrong Or Inconrrent Credentials! Please try again."
      );
      console.log(err.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const veryfyCookie = (
  cookies,
  setStatus,
  dispatch,
  getRolesList,
  navigate
) => {
  fetch(url.adminVerifyToken, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${cookies.admin_access_token}`,
    }),
  })
    .then((v) => v.json())
    .then((v) => {
      if (v.message === "success") {
        setStatus("verified");
        dispatch(getRolesList());
        sessionStorage.setItem(
          "admin_access_details",
          JSON.stringify(v.data.userData)
        );
        setTimeout();
      } else {
        setStatus(false);
        navigate("/login");
      }
    })
    .catch((err) => {
      console.log("====================================");
      console.log(err.message);
      console.log("profile Services : 66");
      console.log("====================================");
      setStatus(false);
      navigate("/login");
    });
  // .finally(() => {
  //   // sessionStorage.setItem('admin_access_details', 'ok')
  // })
};
