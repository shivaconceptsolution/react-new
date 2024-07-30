import { useRef,useState } from "react";
function Listboxnew()
{
    const course=useRef([])
    const[res,setRes] = useState(undefined)
    const arr = ["C","C++","DS","JAVA","PHP","PYTHON","Android","iOS"]
   
    function displayCourse(e)
    {
        const selectedOptions = Array.from(course.current.selectedOptions, option => option.value);
        setRes(selectedOptions.join(','))
        e.preventDefault()
    }
    
    return(<div>
        <form>
            <p>Select Course</p>
            <select name="course" ref={course}  multiple>
             {arr.map(item=>(<option value={item}>{item}</option>))}
            </select>
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res && <div>Result is {res}</div>}
    </div>)
} 
export default Listboxnew;