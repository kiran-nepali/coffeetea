import React, { Component } from 'react';

export class Chocolate extends Component {
  static displayName = Chocolate.name;

  constructor(props) {
    super(props);
    this.state = { chocolatedata: [], loading: true };
  }

  componentDidMount() {
    this.populateChocolateData();
  }

  static renderChocolatedata(chocolatedata) {
    return (
        <div>
            <h2 className="text-center">{chocolatedata.title}</h2>
            <br />
            <div className="text-center">
                <ul  style={{"display":"inline-block","text-align":"left"}}>
                {chocolatedata.stepsToMakeChocolate.map((step,index)=>(
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
      : Chocolate.renderChocolatedata(this.state.chocolatedata);
    
    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateChocolateData() {
    const response = await fetch('api/chocolate/GetChocolateinfo');
    const data = await response.json();
    this.setState({ chocolatedata: data, loading: false });
  }
}
