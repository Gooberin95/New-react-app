import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./BeastModal";
import { Form } from "react-bootstrap";
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
        <Form>
          <Form.Group>
            <Form.Label>Choose Team</Form.Label>
            <Form.Select onChange={this.changeTeam}>
              <option value='1'>One Horn</option>
              <option value="2">Two Horns</option>
              <option value="3">Three Horns</option>
              <option value="100">One Hundred Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          showBeastModal={this.showBeastModal}
          hideBeastModal={this.hideBeastModal}
          selectedBeast={this.selectedBeast}
          specificHorns={this.state.specificHorns}
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


