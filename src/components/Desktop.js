import React from "react"
import WebsiteBanner from "./WebsiteBanner"
import Toolbar from "./Toolbar"
import Directory from "./Directory"

function Desktop() {
    return (
        <main style={{background: "#0d7073", height: "100vh", width: "100vw"}}>
            <Directory />
            <WebsiteBanner title={"Julian's Portfolio"}/>
            <Toolbar />
        </main>
    )
}

export default Desktop