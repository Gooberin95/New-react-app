import React from "react"; 
import { Modal } from "react-bootstrap";
class BeastModal extends React.Component {
    render() {
        return(
            <>
              <Modal show={this.props.showModal}>
                <Modal.Header closeButton>
                <Modal.Body>Hello and then i arrived oh what a day</Modal.Body>
                <Modal.Title>{this.props.selectedBeast}</Modal.Title> 
                </Modal.Header>
             </Modal>
                
            
            </>
        )
    }
}

export default BeastModal