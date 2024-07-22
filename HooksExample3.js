import { useEffect,useLayoutEffect } from "react"

export default function HooksExample3()
{
    useEffect(() => {
        console.log("log 1")
        }, [])
        useLayoutEffect(() => {
        console.log("log 2")
        }, [])
    return(<div>
        <h1>Hooks</h1>
    </div>)
}