const Title = ({title}) => {
    return (
        <div className="container text-center">
           <h1> {!title ? "Name": title}</h1>
        </div>
      );
}
 
export default Title;