const DOB = ({classes, dob}) => {
    return ( 
      
        <h1 className={!classes ?"container text-center": classes}> {!dob ? "DOB": dob}</h1>
   
     );
}
 
export default DOB;