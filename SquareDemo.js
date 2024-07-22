import { useState } from "react"

function SquareDemo()
{
    const[num,setNum]= useState(0) //hooks
    const[res,setRes] = useState('') //output
  
    function checkEvenOdd(e)
    {
        if(num%2==0){
         setRes(`even  ${num}`)
        }
        else{
            setRes(`odd  ${num}`)
        }
        e.preventDefault()
    }
    return(<div>
        <form>
            <input type="text" onChange={(e)=>setNum(e.target.value)} />
            <br/>
            <input type="submit" value="Calculate" onClick={checkEvenOdd} />
        </form>
        <p>{res}</p>
    </div>)
}
export default SquareDemo