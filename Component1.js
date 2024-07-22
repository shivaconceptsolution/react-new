import { useState, createContext, useContext } from "react";
const UserContext = createContext();
function Component1()
{
    const [user, setUser] = useState("SCS");
    return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </UserContext.Provider>
      );
}
function Component2() {
    const user = useContext(UserContext);

    return (
      <>
        <h1>Component 2</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
export default Component1;