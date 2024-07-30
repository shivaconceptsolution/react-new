import { useRef, useState } from "react"
function UncontrolledAddition()
{
    const num1Ref = useRef()
    const num2Ref = useRef()
    const [res,Setres] = useState(undefined)
    
    function addition(e)
    {
          let a = parseInt(num1Ref.current.value)
          let b = parseInt(num2Ref.current.value)
          Setres("result is "+(a+b))
          e.preventDefault()
          //alert("result is "+(a+b))
    }
    return(<div>
        <form onSubmit={addition}>
            <br/>
            <input type="text" name="num1" ref={num1Ref} />
            <br/>
            <input type="text" name="num2" ref={num2Ref} />
            <br/>
            <input type="submit" value="Addition" />
        </form>
        {res}
    </div>)
}
export default UncontrolledAddition;