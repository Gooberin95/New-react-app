import React from "react"; 
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return(
            <>
            <HornedBeast title={'Baby Ibex Goats'} description={'The Alpine ibex is a wild goat that lives in the European Alps. It has big horns, curved backward. Horns of females are a little shorter, subtler, and more curved, serving as a means of self-defense against predators. Usually, males are bigger in size and heavier than females. Another distinctive feature of the male Alpine ibex is the beard on its chin. The coat of these animals is short and smooth, having different colors, depending on the season: in winter they are covered with a reddish-brown coat while in summer their coats become brownish grey.'} imageUrl={'https://c1.staticflickr.com/9/8004/7446577620_f2b9075741_b.jpg'}/>

            <HornedBeast title={'White Mountain Goat of Montana'} description={'These surefooted beasts inhabit many of North Americas most spectacular alpine environments. They often appear at precipitous heights, from Alaska to the U.S. Rocky Mountains, showcasing climbing abilities that leave other animals, including most humans, far below. Mountain goats have cloven hooves with two toes that spread wide to improve balance. Rough pads on the bottom of each toe provide the grip of a natural climbing shoe. Mountain goats are powerful but nimble and can jump nearly 12 feet in a single bound.'} imageUrl={'https://th.bing.com/th/id/R.8ca785462ba14ede2869fd2ce28dd169?rik=TIy8OF32LjEWDA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-XdRtST5NkrM%2fT7z433dfS9I%2fAAAAAAAAGFs%2fA7Agez6HAxs%2fs1600%2fmountain_goat.jpg&ehk=Jmzy64yYh9hlUA21rcqAjiZFMG%2ffBQuLmiUvmUS6ZS0%3d&risl=&pid=ImgRaw&r=0'}/>
            </>
        )
    }
}

export default Main