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
    render() {
        return(
            <>  
            <Card style={{ width: '18rem' }}>
            <Card.Img variant={this.props.imageUrl}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.state.favnum}
                </Card.Text>
                <Button variant="primary" onClick={this.addToFavNum}>Go somewhere</Button>
                <p>{this.state.favnum}</p>
            </Card.Body>
            </Card>
            {/* <div direction = "horizontal" gap = {3}>
                
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}/>
                <p>{this.props.description}</p>
                <Button variant="primary" onClick={this.addToFavNum}>Click here to favorite this</Button>
                <p>{this.state.favnum}</p>  
            </div>        */}
            </>
        )
    }
}

export default HornedBeast