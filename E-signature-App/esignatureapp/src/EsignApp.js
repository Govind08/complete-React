import { useState } from "react";
import Title from "./components/Title";
import DOB from "./components/DOB";



const EsignApp = () => {

    const [name, setName] = useState("");
    const [dob, setDOB] = useState("DOB");
    const [info, setInfo] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem"
    }
    document.body.style.background = "#eee"
    return (<div className="container text-center">
        <Title classes="display-1" title={name} />
        <DOB dob={dob} />
        <p>{info}</p>

        <footer className="d-flex" style={{ justifyContent: "space-around",
         position: "relative", top:"40vh" }}>
            <input type="date" value={dob} style={inputStyle} onChange={(e) => setDOB(e.target.value)} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </footer>

    </div>);
}

export default EsignApp;