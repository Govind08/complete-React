import { Link } from 'react-router-dom';


const Navbar = () => {
    var title = "Govind's blog";

    return (
        <nav>
            <div className="navbar">
                <h1>{title}</h1>
                <div className='link'>
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;