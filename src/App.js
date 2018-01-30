import React, { Component } from 'react';
import Bar from './charts/Bar';
import Scatter from './charts/Scatter';
import Pie from './charts/Pie';
import Area from './charts/Area';
import Histogram from './charts/Histogram';
import Line from './charts/Line';


class App extends Component {

  render() {
    return (
      <div>
        <Bar/>
        <Scatter/>
        <Pie/>
        <Area/>
        <Histogram/>
        <Line/>
      </div>
    );
  }
}

export default App;
