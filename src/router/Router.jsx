import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "../pages/userInfo/UserInfo";
import ActivityRecommendation from "../pages/activityRecommendation/ActivityRecommendation";
import Main from "../pages/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route
          path="/activity-recommendation"
          element={<ActivityRecommendation />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
