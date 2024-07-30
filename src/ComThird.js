
import { useContext } from "react";
import { UserContext } from "./ComFirst";

export default function ComThird()
{
    const user = useContext(UserContext);
    return(<div>
        <h1>Third Component {user}</h1>
    </div>)
}