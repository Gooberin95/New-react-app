import React from "react"; 
import HornedBeast from "./HornedBeast";
import Banan from "./data.json";



class Main extends React.Component {
    render()
     {
        
        const theAnimals = Banan.map(thing =>
            <HornedBeast 

                title={thing.title}
                Beast={thing}
                imageUrl={thing.image_url}
                selectedBeast={this.props.selectedBeast}
                showBeastModal={this.props.showBeastModal}
                hideBeastModal={this.props.hideBeastModal}
                description={thing.description}
                showStudentModal={this.props.showStudentModal}
                
            />)
            
            return(
               
            <>
            
            {theAnimals}
            </>
        )
    }
}

export default Main;