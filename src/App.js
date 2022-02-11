import React from "react"
import '98.css';
import './App.css';
import WebsiteBanner from "./components/WebsiteBanner"
import AppWindow from "./components/AppWindow"
import Toolbar from "./components/Toolbar"
import DesktopFolder from "./components/DesktopFolder";
import DesktopIcon from "./components/DesktopIcon";
import githubIcon from "./images/windows-icons/GitHub-Mark-120px-plus.png"

function App() {
  return (
    <main style={{ background: "#0d7073", height: "100vh", width: "100vw" }}>
      <DesktopFolder label="CV" top={40} />
      <DesktopIcon src={githubIcon} label="Github" top={140} href="https://github.com/julianterence" />
      <WebsiteBanner title={"Julian's Portfolio"} />
      <Toolbar />
    </main>
  );
}

export default App;
