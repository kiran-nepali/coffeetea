import React, { Component } from 'react';

export class Coffee extends Component {
  static displayName = Coffee.name;

  constructor(props) {
    super(props);
    this.state = { coffeedata: [], loading: true };
  }

  componentDidMount() {
    this.populateCoffeeData();
  }

  static renderCoffeedata(coffeedata) {
    return (
        <div>
            <h2 className="text-center">{coffeedata.title}</h2>
            <br />
            <div className="text-center">
                <ul  style={{"display":"inline-block","text-align":"left"}}>
                {coffeedata.stepsToMakeCoffee.map((step,index)=>(
                    <li  key={index}>
                        {step}
                    </li>
                ))}
                </ul>
            </div>
            
        </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Coffee.renderCoffeedata(this.state.coffeedata);
    
    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateCoffeeData() {
    const response = await fetch('api/coffee/GetCoffeeinfo');
    const data = await response.json();
    this.setState({ coffeedata: data, loading: false });
  }
}
