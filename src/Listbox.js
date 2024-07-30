import { useState } from "react";
function Listbox()
{
    const[course,setCourse]=useState([])
    const[res,setRes] = useState(undefined)
    const arr = ["C","C++","DS","JAVA","PHP","PYTHON","Android","iOS"]
    function handleListItem(e)
    {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setCourse(selectedOptions)
    }
    function displayCourse(e)
    {
        setRes(course.join(','))
        e.preventDefault()
    }
    
    return(<div>
        <form>
            <p>Select Course</p>
            <select name="course" onChange={handleListItem} multiple>
             {arr.map(item=>(<option value={item}>{item}</option>))}
            </select>
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res && <div>Result is {res}</div>}
    </div>)
} 
export default Listbox;