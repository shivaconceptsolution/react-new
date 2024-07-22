import { createContext,useState } from "react";
import ComSecond from "./ComSecond";
export const UserContext = createContext(); // global variable
export default function ComFirst()
{
    const [user, setUser] = useState("Welcome in Global Varibale");
    return(<UserContext.Provider value={user}>
        <h1>First Component</h1>
        <ComSecond />
         </UserContext.Provider>)
}