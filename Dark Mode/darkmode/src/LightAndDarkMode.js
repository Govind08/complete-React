import { useState,useContext } from "react";
import { ThemeContext } from "./theme-context";


const LightAndDarkMode = () => {
    const [title, settitle] = useState("Title");
    const [info, setInfo] = useState("info");
    // const [mode, setMode] = useState("Dark");
    const  {theme, changeTheme} = useContext(ThemeContext)



//  const handleClick=(e)=>{
   
// //    if(mode=="Light"){
// //     e.target.style.background ="#000000";
// //     e.target.style.textColor ="#FFFFFF";
// //     console.log(e)
// //     setMode("Dark");
// //    }else{
// //     e.target.style.background ="#FFFFFF";
// //     e.target.style.textColor ="#000000";
// //     setMode("Light");

   
// //    }
// }

    return (<div>
        <span style={{position:"absolute", top:10, right:10}}
        >
            <button onClick={()=>changeTheme()}>{theme}</button>
        </span>
        <h1>My blog with {theme} theme</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quaerat magnam error tenetur est ea facilis nihil provident veniam numquam ducimus quod dolores illo dolor placeat quis possimus doloremque sapiente.</p>
    </div>);
}

export default LightAndDarkMode;