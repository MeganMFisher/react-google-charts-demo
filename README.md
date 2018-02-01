# React-Google Maps Demo

## Setup: 

```
npm i react-google-charts
```

Import Chart from `react-google-charts` into the component. 

```
import { Chart } from 'react-google-charts';
```

## Creating a bar chart: 

Create your data: 

```    
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      data: [
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
    };

```

Render your chart

```
      <Chart
        chartType="BarChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="BarChart"
        width="100%"
        height="400px"
        legend_toggle
      />
```


That is all you need. There are Pie, Line, Area, Scatter, and Histogram examples in this repo or you can see the docs below for more options. 


## Helpful Links: 

[react-google-charts docs](https://rakannimer.github.io/react-google-charts/#/?_k=prohrc)