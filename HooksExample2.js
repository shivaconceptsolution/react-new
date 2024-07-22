import { useState,useEffect } from "react";
function useDocumentTitle(title)
{
    useEffect(() => {  
        // Update the document title using the browser API  
        document.title = title;  
      },[title]);  
}
function Hooksexample2()
{
    const [count, setCount] = useState(0);  
  
    // Similar to componentDidMount and componentDidUpdate:  
    
    useDocumentTitle(`You clicked ${count} times`)
    
    return (  
      <div>  
        <p>You clicked {count} times</p>  
        <button onClick={() => setCount(count + 1)}>  
          Click me  
        </button>  
      </div>  )
}
export default Hooksexample2;