import { useState } from "react";
function SI()
{
    const[p,setP] = useState(0) //state attribute
    const[r,setR] = useState(0)
    const[t,setT] = useState(0)
    const[res,setRes] = useState(0)
    function enterP(e)
    {
        setP(e.target.value)
    }
    function enterR(e)
    {
        setR(e.target.value)
    }
    function enterT(e)
    {
        setT(e.target.value)
    }
    function calcSI(e)
    {
       let result = (p*r*t)/100;
       setRes(result)
       e.preventDefault()
    }
    return(<div>
        <form>
            <input type="text" placeholder="Enter P" onChange={enterP} />
            <br/>
            <input type="text" placeholder="Enter R" onChange={enterR} />
            <br/>
            <input type="text" placeholder="Enter T" onChange={enterT} />
            <br/>
            <input type="submit" value="Click" onClick={calcSI} />
        </form>
        {res}
    </div>)
}
export default SI;