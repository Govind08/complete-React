import { useState } from "react";

const RandomizeApp = () => {

    const [randomColor, setRandomColor] = useState("#eee");


    const handleClick = (e) => {
        setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));

        document.body.style.background = randomColor;
        e.target.style.backgroundColor =randomColor;

        console.log("change color")
    }
    const buttonStyle = {
        backgroundColor: "#e34",
        margin: "5px",
        justifyContent: "space-around",
        padding :"10px",
        textColor :"#000"

    }
    return (<div>
        <h1>Randomize Color</h1>
        <button style={buttonStyle} onClick={(e) => handleClick(e)}>Click me</button>
        <button style={buttonStyle} onClick={(e) => handleClick(e)}>Click me</button>
        <button style={buttonStyle} onClick={(e) => handleClick(e)}>Click me</button>
        <button style={buttonStyle} onClick={(e) => handleClick(e)}>Click me</button>

    </div>);
}

export default RandomizeApp;