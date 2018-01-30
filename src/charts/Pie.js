import { Chart } from 'react-google-charts';
import React, {Component} from 'react';
 
class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Lunch Options',
        legend: 'none',
      },
      data: [
        ['Option', 'Percentage'],
        ['CPK', 12],
        ['Red Robin', 5.5],

      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="PieChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="PieChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}
export default Pie;