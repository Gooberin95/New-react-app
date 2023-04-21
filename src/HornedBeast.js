import React from "react"; 
import Button from "react-bootstrap/Button";

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
            <div direction = "horizontal" gap = {3}>
                
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}/>
                <p>{this.props.description}</p>
                <Button variant="primary" onClick={this.addToFavNum}>Click here to favorite this</Button>
                <p>{this.state.favnum}</p>  
            </div>       
            </>
        )
    }
}

export default HornedBeast