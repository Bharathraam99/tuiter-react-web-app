import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ExploreScreen from "./explore-screen";
// import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import MoreScreen from "./more-screen.js";
import MessageScreen from "./message-screen";
import ListScreen from "./lists-screen";
import NotificationScreen from "./notification-screen";
import { Navigate } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsreducerExplore from "./reducers/tuits-reducerExplore";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./profile-screen";
import LoginScreen from "./user/login-screen"
import RegisterScreen from "./user/register";
import authReducer from "./reducers/auth-reducer";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    explore: tuitsreducerExplore,
    user: authReducer,
  },
});
function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/more" element={<MoreScreen />} />
              <Route path="/notifications" element={<NotificationScreen />} />
              <Route path="/lists" element={<ListScreen />} />
              <Route path="/messages" element={<MessageScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList></WhoToFollowList>
            {/* <WhoToFollowListItem />
          <WhoToFollowListItem
            who={{
              userName: "Tesla",
              handle: "tesla",
              avatarIcon: "teslalog.png",
            }}
          />
          <WhoToFollowListItem
            who={{
              userName: "SpaceX",
              handle: "spacex",
              avatarIcon: "spacexlog.png",
            }}
          /> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
