import React, { Component } from "react";
import style from "./Layout.module.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div className={style.Layout}>
        <Header />
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
