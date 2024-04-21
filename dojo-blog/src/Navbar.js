const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
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