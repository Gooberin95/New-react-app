import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React from "react"; 

class HornedBeast extends React.Component {
    render() {
        return(
            <>
                <h2>GoatandHorns</h2>
                <img> {this.props.title}</img>
                <p>{this.props.description}</p>            
            </>
        )
    }
}

export default HornedBeast