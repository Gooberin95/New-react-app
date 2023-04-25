import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./BeastModal";
import banan from "./data.json";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  selectedBeast = (beastObj) => {
    this.setState({student: beastObj})
  }
  render() {
    return(
      <>
        <div className="Rhinos">
        <Header/>
        <Main
          showBeastModal={this.showBeastModal}
          hideBeastModal={this.hideBeastModal}
        />
        <BeastModal
          showModal={this.state.showModal}
          hideBeastModal={this.hideBeastModal}
        />
        </div>
        <Footer/>
      </>
    )
  }
}
 

export default App; 


