import { useState } from "react";
function CheckboxExample()
{
    const[course,setCourse]=useState([])
    const[res,setRes] = useState(undefined)
    function handleCheckboxChange(e)
    {
        if(e.target.checked)
        {
            setCourse([...course,e.target.value])
        }
        else
        {
            setCourse(course.filter((item) => item !== e.target.value));
        }
    }
    function displayCourse(e)
    {
        setRes(course)
        e.preventDefault()
    }
    
    return(<div>
        <form>
            <p>Select Course</p>
            <input type="checkbox" name="course" value="MERN STACK" onChange={handleCheckboxChange} />MERN
            <br/>
            <input type="checkbox" name="course" value="MEAN STACK" onChange={handleCheckboxChange}  />MEAN
            <br/>
            <input type="checkbox" name="course" value="JAVA FULL STACK" onChange={handleCheckboxChange}  />JAVA FULL STACK
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
} 
export default CheckboxExample;