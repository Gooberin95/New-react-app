import React from "react"; 
import {Card, Button} from "react-bootstrap";



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favnum: 0,
            minusfav: 0
    }
}
    addToFavNum = () => {
        this.setState({
            favnum: this.state.favnum + 1
        })
    }

    handleModalEvent = () => {
        this.props.selectedBeast(this.props.Beast);
        this.props.showBeastModal();
    }


    render(){
        return(
            <>  
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleModalEvent} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title> 
                <Card.Text>
                {this.state.favnum}
                </Card.Text>
                <Button variant="primary" onClick={this.addToFavNum}>Go somewhere</Button>
                <p>{this.state.favnum}</p>
            </Card.Body>
            </Card>
            </>
        )
    }
}



export default HornedBeast;