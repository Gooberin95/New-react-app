
import React from "react"; 

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favnum: 0,
            minusfav: 0
    }
}
    render() {
        return(
            <>
            <div>
                
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}/>
                <p>{this.props.description}</p>
                <p>{this.state.favnum}</p>  
            </div>       
            </>
        )
    }
}

export default HornedBeast