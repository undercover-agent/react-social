import React from "react";
import style from "./Content.module.css";
import MyPosts from "../../containers/MyPosts/MyPosts";
import Profile from "../Profile/Profile";

class Content extends React.Component {
  render() {
    return (
      <main className={style.Content}>
        <div className="content">
          <div className={style.profile}>
            <Profile />
          </div>
          <div className="post-container">
            <MyPosts />
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
