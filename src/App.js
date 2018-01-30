import React, { Component } from 'react';
import Bar from './charts/Bar';
import Scatter from './charts/Scatter';
import Pie from './charts/Pie';
import Area from './charts/Area';
import Histogram from './charts/Histogram';


class App extends Component {

  render() {
    return (
      <div>
        <Bar/>
        <Scatter/>
        <Pie/>
        <Area/>
        <Histogram/>
      </div>
    );
  }
}

export default App;
