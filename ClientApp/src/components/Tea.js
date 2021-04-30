import React, { Component } from 'react';

export class Tea extends Component {
  static displayName = Tea.name;

  constructor(props) {
    super(props);
    this.state = { teadata: [], loading: true };
  }

  componentDidMount() {
    this.populateTeaData();
  }

  static renderTeadata(teadata) {
    return (
        <div>
            <h2 className="text-center">{teadata.title}</h2>
            <br />
            <div className="text-center">
                <ul  style={{"display":"inline-block","text-align":"left"}}>
                {teadata.stepsToMakeTea.map((step,index)=>(
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
      : Tea.renderTeadata(this.state.teadata);
    
    return (
      <div>
        {contents}
      </div>
    );
  }

  async populateTeaData() {
    const response = await fetch('api/tea/GetTeainfo');
    const data = await response.json();
    this.setState({ teadata: data, loading: false });
  }
}
