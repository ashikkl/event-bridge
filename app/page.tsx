import "./page.module.css";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>Welcome Back</div>
      <div>
        <label htmlFor="username">username</label>
        <input aria-label="username" type="text" />
        <label htmlFor="password">password</label>
        <input aria-label="password" type="text" />
        <input type="button" value="login" />
        
      </div>
    </div>
  );
};

export default HomePage;
