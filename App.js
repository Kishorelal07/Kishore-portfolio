import React from "react"
import ReactDOM from "react-dom/client"
import Experience from "./src/components/experience/Experience"
import About from "./src/components/about/About"
import Header from "./src/components/header/Header"
import Contacts from "./src/components/contact/Contacts"
import Footer from "./src/components/footer/Footer"
// const heading = React.createElement("h1",{},"Hello World!")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

const App = () => {

    return(
        <>
        <Header/>
        {/* <Nav/> */}
        <About/>
        <Experience/>
        {/* <Myprojects/> */}
        <Contacts/>
        <Footer/>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)