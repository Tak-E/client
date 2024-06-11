import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "../pages/userInfo/UserInfo";
import ActivityRecommendation from "../pages/activityRecommendation/ActivityRecommendation";
import Main from "../pages/main/Main";
import Category from "../pages/category/Category";
import ActivityStats from "../pages/activityStats/ActivityStats";
import Emotion from "../pages/emotion/Emotion";

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
        <Route path="/emotion" element={<Emotion />} />
        <Route path="/activity-stats" element={<ActivityStats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
