import React, { useContext } from 'react'
import Plot from 'react-plotly.js';
import { ChartContext } from '../context/ChartContext';
const Plots = () => {

   

      const [context, setContext] = useContext(ChartContext);

      console.log(context)
      const data = [
        {
          type: 'bar',
          x: context.x,
          y: context.y,
        },
      ];
    
      const layout = {
        title: 'Simple Bar Chart',
        xaxis: { title: 'name' },
        yaxis: { title: 'age' },
      }; 

  return (
    <div>
        <Plot
    data={data}
    layout={layout}
    config={{ displayModeBar: false }}
        />
</div>
  )
}

export default Plots