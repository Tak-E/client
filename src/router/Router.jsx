import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "../pages/userInfo/UserInfo";
import ActivityRecommendation from "../pages/activityRecommendation/ActivityRecommendation";
import Main from "../pages/main/Main";
import Category from "../pages/category/Category";

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
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
