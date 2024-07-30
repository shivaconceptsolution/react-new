import React from "react";
export class Classadditionun extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={res:undefined}
     
    }
    add=(e)=>
    {
       
         let a = this.num1.value
         let b = this.num2.value
         let c = parseInt(a)+parseInt(b);
         this.setState({'res':'result is '+c})
         e.preventDefault()
    }
    render()
    {
        return(
        <div>
<form onSubmit={this.add} >
<input type="text" id="txtnum1" ref={inputValue=>this.num1=inputValue}
 placeholder="Enter First Number" />
<br/>
<input type="text" id="txtnum2" ref={inputValue=>this.num2=inputValue} 
placeholder="Enter Second Number" />
<br/>
<input type="submit" value="Add" />
</form>
{this.state.res}
        </div>)
    }

}