import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";



class App extends React.Component {
  render() {
    return(
      <div className="Rhinos">
      <Header/>
      <Main/>
      
      <Footer/>
      </div>
    )
  }
}

export default App; 


