import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    const {id} =useParams()
    return ( 
        <div>
            <h1>Create {id}</h1>
        </div>
     );
}
 
export default Create;