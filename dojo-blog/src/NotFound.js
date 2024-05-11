import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( <div className="not-found">
        <h1>Sorry</h1>
        <p>This page not found</p>
        <Link to="/">Back to Home</Link>
        {/* <button>Back to Home</button> */}
    </div> );
}
 
export default NotFound;