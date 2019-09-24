import React from "react";
import style from "./Content.module.css";
import Profile from "../Profile/Profile";

class Content extends React.Component {
  render() {
    return (
      <main className={style.Content}>
        <div className="content">
          <div className={style.profile}>
            <Profile
              postData={this.props.profilePage.postData}
              profilePage={this.props.profilePage}
              addPost={this.props.addPost}
              updateNewPostText={this.props.updateNewPostText}
            />
          </div>
          <div className="post-container"></div>
        </div>
      </main>
    );
  }
}

export default Content;
