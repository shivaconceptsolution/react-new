import React from "react"

export class Classaddition extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {a:undefined,b:undefined,res:undefined}
      
    }
    enterNum1=(e)=>
    {
        this.setState({a:e.target.value})
    }
    enterNum2=(e)=>
    {
         this.setState({b:e.target.value})
    }
    add=(e)=>
    {
        let num1 = this.state.a
        let num2 = this.state.b
        let num3 = parseInt(num1)+parseInt(num2)
        this.setState({res:'result is '+num3})
        e.preventDefault()
    }
    render()
    {
return(<div>
<form action="">
<input type="text" placeholder="Enter First Number" onChange={this.enterNum1}
 />
<br/>
<br/>
<input type="text" placeholder="Enter First Number" onChange={this.enterNum2} 
/>
<br/>
<br/>
<input type="submit" name="btnsubmit" value="Addition" onClick={this.add} />
</form>  
{this.state.res}
</div>

        )
    }
}