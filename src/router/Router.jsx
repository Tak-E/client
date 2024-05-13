import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "../pages/UserInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
