import React from "react"; 
import { Modal } from "react-bootstrap";
class BeastModal extends React.Component {
    render() {
        return(
            <>
              <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                <Modal.Header closeButton>
                <Modal.Body>{this.props.Beast.description}</Modal.Body>
                <Modal.Title></Modal.Title> 
                </Modal.Header>
             </Modal>
                
              
            </>
        )
    }
}

export default BeastModal