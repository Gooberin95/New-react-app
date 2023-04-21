
import React from "react"; 

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
            <div>
                
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}/>
                <p>{this.props.description}</p>
                <button onClick={this.addToFavNum}>Click here to like</button>
                <p>{this.state.favnum}</p>  
            </div>       
            </>
        )
    }
}

export default HornedBeast