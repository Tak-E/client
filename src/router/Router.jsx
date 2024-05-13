import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "../pages/userInfo/UserInfo";
import ActivityRecommendation from "../pages/activityRecommendation/ActivityRecommendation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
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
