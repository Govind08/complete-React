const Navbar = () => {
  var title = "Govind's blog";

    return (
        <nav>
            <div className="navbar">
               <h1>{title}</h1>

                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a>

            </div>
        </nav>
    );
}

export default Navbar;