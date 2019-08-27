import React, { Component } from "react";
import style from "./Layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div className={style.Layout}>
        <Header />
        <Footer />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
