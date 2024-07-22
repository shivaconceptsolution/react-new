import { useState } from "react";
function RadioExample()
{
    const[course,setCourse]=useState(undefined)
    const[res,setRes] = useState(undefined)
    function displayCourse(e)
    {
        setRes(course)
        e.preventDefault()
    }
    return(<div>
        <form>
            <p>Select Course</p>
            <input type="radio" name="course" value="MERN STACK" onChange={(e)=>setCourse(e.target.value)} />MERN
            <br/>
            <input type="radio" name="course" value="MEAN STACK" onChange={(e)=>setCourse(e.target.value)}  />MEAN
            <br/>
            <input type="radio" name="course" value="JAVA FULL STACK" onChange={(e)=>setCourse(e.target.value)}  />JAVA FULL STACK
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
} 
export default RadioExample;