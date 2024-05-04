 import { useEffect,useState } from "react";
 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [previewMgs, setPreviewMgs] = useState(true);
    const [errorMgs ,setErrorMgs] = useState("Loding...")

        useEffect(() => 
        {setTimeout(() => {
         fetch(url)
         .then(res => {
             console.log(res);
             if(!res.ok){
                 throw Error('could not find error mgs');
             }
             return res.json()
         }).then(data => {
             console.log(data)
             setData(data);
             setPreviewMgs(false);
         }).catch(err=>{
             console.log(err.message );
             setErrorMgs(err.message);
         })
     }
        , 1000)}, [url]);
    return({data,previewMgs,errorMgs})
 }
  
 export default useFetch;