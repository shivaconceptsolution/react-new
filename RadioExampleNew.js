import { useRef,useState } from "react";
function RadioExampleNew()
{
    const course1 =useRef()
    const course2 =useRef()
    const course3 =useRef()
    const[res,setRes] = useState(undefined)
    function displayCourse(e)
    {
        if(course1.current.checked)
        {
            setRes(course1.current.value)
        }
        else  if(course2.current.checked)
            {
                setRes(course2.current.value)
            }
            else
            {
                setRes(course3.current.value)
            }
        e.preventDefault()
    }
    return(<div>
        <form>
            <p>Select Course</p>
            <input type="radio" name="course" value="MERN STACK" ref={course1} />MERN
            <br/>
            <input type="radio" name="course" value="MEAN STACK" ref={course2} />MEAN
            <br/>
            <input type="radio" name="course" value="JAVA FULL STACK" ref={course3} />JAVA FULL STACK
            <br/>
            <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
} 
export default RadioExampleNew;