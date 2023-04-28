import React from "react"; 
import "./Main.css";
import { Modal } from "react-bootstrap";
class BeastModal extends React.Component {
    render() {
        console.log(this.props.Beast);
        return(
            <>
              <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
                <Modal.Header closeButton>
                <Modal.Body><img src={this.props.Beast.image_url} alt={this.props.Beast.title} width='200px' height='300px' /> {this.props.Beast.description}</Modal.Body>
                <Modal.Title></Modal.Title> 
                </Modal.Header>
             </Modal>
                
              
            </>
        )
    }
}

export default BeastModal;
