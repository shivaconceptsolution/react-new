import React from "react";
export class Classcomponentexample2 extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delHeader = () => {
        this.setState({show: false});
      }
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };
        return (
          <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
}

class Child extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World Child!</h1>
      );
    }
  }