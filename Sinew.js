import { useState,useRef } from "react"

function Sinew()
{
    const p= useRef()
    const r = useRef()
    const t = useRef()
    const[result,setResult] = useState(undefined)
    function calc(e)
    {
        const res = (parseFloat(p.current.value) * parseFloat(r.current.value) * parseFloat(t.current.value))/100;
      //  alert("result is "+res);
        setResult("result is "+res)
        e.preventDefault()

    }
    return(<div>
        <form action="">
        <input type="text" name="p" placeholder="Enter P" ref={p} />
        <br/>
        <input type="text" name="r" placeholder="Enter R" ref={r} />
        <br/>
        <input type="text" name="t" placeholder="Enter P" ref={t} />
        <br/>
        <input type="submit" name="btnsubmit" value="Calculate" onClick={calc} />
        </form>
        {result}
    </div>)
}
export default Sinew;