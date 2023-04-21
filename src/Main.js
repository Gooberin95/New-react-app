import React from "react"; 
import HornedBeast from "./HornedBeast";
import Banan from "./data.json";
import Button from "react-bootstrap/Button";


class Main extends React.Component {
    render() {
        const theAnimals = Banan.map(thing =>
            <HornedBeast 
            title={thing.title}
            imageUrl={thing.image_url}
            description={thing.description}
            />)


        return(
            <>
            {theAnimals}
            </>
        )
    }
}

export default Main