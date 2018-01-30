import React, { Component } from 'react';
import Bar from './Bar';
import Scatter from './Scatter';
import Pie from './Pie';
import Area from './Area';


class App extends Component {

  render() {
    return (
      <div>
        <Bar/>
        <Scatter/>
        <Pie/>
        <Area/>
      </div>
    );
  }
}

export default App;
