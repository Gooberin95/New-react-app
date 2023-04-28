import React from "react"; 
import HornedBeast from "./HornedBeast";

import "./Main.css";



class Main extends React.Component {
    render()
     {
        
        const theAnimals = this.props.specificHorns.map(thing =>
            <HornedBeast 

                title={thing.title}
                Beast={thing}
                imageUrl={thing.image_url}
                selectedBeast={this.props.selectedBeast}
                showBeastModal={this.props.showBeastModal}
                hideBeastModal={this.props.hideBeastModal}
                description={thing.description}
                showStudentModal={this.props.showStudentModal}
                specificHorns={this.props.horns}


                
            />)
            
            return(
               
            <>
            
            {theAnimals}
            </>
        )
    }
}

export default Main;