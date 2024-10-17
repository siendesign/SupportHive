import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./views/auth/ResetPassword.jsx";
import ResetPasswordConfirm from "./views/auth/ResetPasswordConfirm.js";
import EmailVerification from "./views/auth/EmailVerification.js";
import CreateAccount from "./views/auth/CreateAccount.js";
import ForgotPassword from "./views/auth/ForgotPassword.js";
import VerificationSuccessful from "./views/auth/VerificationSuccessful.js";
import Login from "./views/auth/Login.js";
import Dashboard from "./views/Dashboard/index.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/reset-password-confirm"
          element={<ResetPasswordConfirm />}
        />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Verification-successful"
          element={<VerificationSuccessful />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
