import React from "react"
import './App.css';
import '98.css';
import WebsiteBanner from "./components/WebsiteBanner"
import Toolbar from "./components/Toolbar"
import Directory from "./components/Directory"
import DesktopIcon from "./components/DesktopIcon";
import GithubIcon from "./images/windows-icons/GitHub-Mark-120px-plus.png"

function App() {
  return (
    <main style={{ background: "#0d7073", height: "100vh", width: "100vw" }}>
      <Directory />
      <DesktopIcon src={GithubIcon} label="Github" />
      <WebsiteBanner title={"Julian's Portfolio"} />
      <Toolbar />
    </main>
  );
}

export default App;
