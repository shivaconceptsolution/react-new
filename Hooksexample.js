import { useState } from "react"

function Hooksexample()
{
    const[count,setCount] = useState(0)
    return(<div>
        <input type="button" onClick={()=>setCount(count+1)} value="Click" />
        {count}
    </div>)
}
export default Hooksexample;
