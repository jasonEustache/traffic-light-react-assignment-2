import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
   index : 0
  }
increment = ()=>{ this.setState({ index: this.state.index + 1 })};

  render() {
    const light = ['red','yellow','green'];
    const color = this.state.index;
    const resetOrContinue = color === 3 ? this.setState({ index: 0}) : color;
    const change = light[resetOrContinue];
 
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${color === 0 ? change : 'black'  }`} > </div>
          <div className={`circle ${color === 1 ? change : 'black'  }`} ></div>
          <div className={`circle ${color === 2 ? change : 'black'  }`} ></div>
        </div>
        <button className="next-state-button" onClick={this.increment}>Next State</button>
      </div>
    );
  }
}
