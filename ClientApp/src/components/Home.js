import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1 className="text-center">Please select below to make your choice of drink</h1>
        <br />
        <hr />
        <div className="col-md-6 offset-md-4">
          <Link to="/fetch-teadata" className="btn btn-outline-primary m-2 btn-lg">Tea</Link>
          <Link to="/fetch-coffeedata" className="btn btn-outline-primary m-2 btn-lg">Coffee</Link>
          <Link to="/fetch-chocolatedata" className="btn btn-outline-primary m-2 btn-lg">Chocolate</Link>
        </div>
      </div>
    );
  }
}
