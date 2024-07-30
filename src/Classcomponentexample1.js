import React from "react"

export class Classcomponentexample1 extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {a:10}
    }
    shouldComponentUpdate() {
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.a;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.a;
      }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({a:20})},2000)
    }
    render()
    {
        return(<div>
            <p>value of a={this.state.a}</p>
            <div id="div1"></div>
          <div id="div2"></div>
        </div>)
    }
}