const Home = () => {
     const handleClick = ()=>{
        console.log('click me')
     }

     const handleClickAgain =(name)=>{
        console.log('click me again '+name)
     }
    return (  <div
    className="home">
        <h2>Home</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>{handleClickAgain('Govind')}}>Click me again</button>

    </div>);
}
 
export default Home;