import React from "react";
import { useState } from "react";
import { Client } from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, name: "Yash k" },
    { socketId: 2, name: "Raj" },
  ]);
  return (
    <div className="mainWrap">
      <div className="sideBar">
        <div className="innerSideBar">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt="Collab-code logo"
              src="/Codinglogo.png"
              className="logoImage"
            />
          </div>
          <h1 className="editorTitle">Collab-Code</h1>
          <h3 style={{ color: "#4aed88" }}>Connected</h3>

          <div className="clientsList">
            {clients.map((client) => {
              return <Client username={client.name} key={client.socketId} />;
            })}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn editorLeaveBtn">Leave Room</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
