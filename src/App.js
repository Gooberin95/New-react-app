import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./BeastModal";
import Form from "./Form.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Beast: {},
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
    this.setState({Beast: beastObj})
  }
  render() {
    return(
      <>
      
        <div className="Rhinos">
        <Header/>
        <Form />
        <Main
          showBeastModal={this.showBeastModal}
          hideBeastModal={this.hideBeastModal}
          selectedBeast={this.selectedBeast}
        />
        <BeastModal
          showModal={this.state.showModal}
          
          hideBeastModal={this.hideBeastModal}
          Beast={this.state.Beast}
        />
        </div>
        <Footer/>
      </>
    )
  }
}
 

export default App; 


