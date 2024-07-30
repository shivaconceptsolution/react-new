import { useState } from "react";
function DropdownList()
{
    const[course,setCourse]=useState(undefined)
    const[res,setRes] = useState(undefined)
    const arr = {1:"C",2:"C++",3:"DS",4:"JAVA",5:"PHP",6:"PYTHON",7:"Android",8:"iOS"}
    function displayCourse(e)
    {
        setRes(course)
        e.preventDefault()
    }
    return(<div>
        <form>
            <p>Select Course</p>
            <select name="course" onChange={(e)=>setCourse(e.target.value)}>
                <option value="">Select Course</option>
               {Object.entries(arr).map(([key, value])=>(<option value={key}>{value}</option>))}
            </select>
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
} 
export default DropdownList;