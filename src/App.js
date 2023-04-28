import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./BeastModal";
import Form from "./Form.js";
import specificHorns from "./data.json";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Beast: {},
      showModal: false,
      specificHorns: specificHorns
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

  superHorns = (e) => {
    e.preventDefault();
    let filteredAnimal;

    if(e.target.value === '1') {
      filteredAnimal = specificHorns.filter(Beast => Beast.horns === '1')
      }
    else if(e.target.value === '2') {
      filteredAnimal = specificHorns.filter(Beast => Beast.horns === '2')

    }
    else if(e.target.value === '3') {
      filteredAnimal = specificHorns.filter(Beast => Beast.horns === '3')

    }
    else if(e.target.value === '100') {
      filteredAnimal = specificHorns.filter(Beast => Beast.horns === '100')

    }

    else {
      filteredAnimal = specificHorns
    }

    this.setState({specificHorns: filteredAnimal})
  }
  
  render() {
    return(
      <>
      
        <div className="Rhinos">
        <Header/>
        <Form.Select aria-label="Default select example" onChange={this.specificHorns}>
          <option>Open this select menu</option>
          <option value="1" >One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="4">One Hundred Horns</option>
        </Form.Select>
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


