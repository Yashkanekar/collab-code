import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewId = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created new room successfully");
  };

  return (
    <div className="homePageWrapper">
      <img
        className="homePageLogo"
        src="/business-team-doing-creative-brainstorming.png"
        alt="collab-code-logo"
      />
      <h1 className="title">Collab-Code</h1>
      <h2 className="titleSmall">
        An <span>easy</span> way to write code together
      </h2>
      <div className="formWrapper">
        <h4 className="mainLabel">Enter room id</h4>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Enter room id here"
            className="inputBox"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter username"
            className="inputBox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn joinBtn">Join</button>
        </div>
        <span className="createInfo">
          If you dont have a room id, then create&nbsp;
          <a onClick={createNewId} href="" className="createNewBtn">
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
