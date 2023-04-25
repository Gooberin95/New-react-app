import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      student: {},
      showModal: false
    }
    }
  showBeastModal = () => {
    this.setState({ showModal: true})
  }

  hideBeastModal = () => {
    this.setState({showModal: false})
  }
  render() {
    return(
      <>
        <div className="Rhinos">
        <Header/>
        <Main/>
      
        <Footer/>
        </div>
      </>
    )
  }
}


export default App; 


