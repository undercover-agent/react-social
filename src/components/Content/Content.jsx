import React from "react";
import style from "./Content.module.css";
import Profile from "../Profile/Profile";

class Content extends React.Component {
  render() {
    return (
        <main className={style.Content}>
          <div className="content">
            <div className={style.profile}>
              <Profile />
            </div>
            <div className="post-container"></div>
          </div>
        </main>
    );
  }
}

export default Content;
