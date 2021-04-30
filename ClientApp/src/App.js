import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Tea } from './components/Tea';
import { Coffee } from './components/Coffee';
import { Chocolate } from './components/Chocolate';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/fetch-teadata' component={Tea} />
        <Route path='/fetch-coffeedata' component={Coffee} />
        <Route path='/fetch-chocolatedata' component={Chocolate} />
       
      </Layout>
    );
  }
}
