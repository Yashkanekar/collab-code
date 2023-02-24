import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <img
        className="homePageLogo"
        src="/business-team-doing-creative-brainstorming.png"
        alt="collab-code-logo"
      />
      <h1 className="title">Collab-Code</h1>
      <h2 className="titleSmall">
        An <span>easy solution</span> to program together
      </h2>
      <div className="formWrapper">
        <h4 className="mainLabel">Enter room id</h4>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Enter room id here"
            className="inputBox"
          />
          <input
            type="text"
            placeholder="Enter username"
            className="inputBox"
          />
          <button className="btn joinBtn">Join</button>
        </div>
        <span className="createInfo">
          If you dont have a room id, then create&nbsp;
          <a href="#" className="createNewBtn">
            new room
          </a>
        </span>
      </div>

      <footer>
        Made with 💓 by &nbsp;
        <a href="https://github.com/Yashkanekar">Yash Kanekar</a>
      </footer>
    </div>
  );
};

export default Home;
