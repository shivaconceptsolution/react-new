import React from "react"
export default function PropsExample(props)
{
    return (<>
        {props.x} |
        {props.y}
          <Addition a={10} b={20} />
        </>)
}

function Addition(props)
{
    var c = props.a+ props.b
    return <div>{c}</div>
}