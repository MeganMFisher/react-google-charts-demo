import { Chart } from 'react-google-charts';
import React, {Component} from 'react';
 
class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Yearly Sales and Expenses Report',
        hAxis: { title: 'Year'},
        vAxis: { title: 'Sales/Expenses'},
      },
      data: [["Year","Sales","Expenses"],["2013",1000,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],
    };
  }
  render() {
    return (
      <Chart
        chartType="AreaChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="AreaChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}
export default Area;