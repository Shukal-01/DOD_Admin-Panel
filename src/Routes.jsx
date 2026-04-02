import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Verification } from "./view/admin/auth/verification/Verification";
import { Login } from "./view/admin/auth/login/Login";
import { ForgetPassword } from "./view/admin/auth/login/ForgetPassword";
import AdminAuth from "./view/admin/auth/verification/AdminAuth";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/admin/:page" element={<AdminAuth />} />
      </Routes>
    </BrowserRouter>
  );
};
