import React, { useContext, useState } from 'react'

import rows from '../data/sampleChartData.json'
import CustomTable from '../components/CustomTable';
import { ChartContext } from '../context/ChartContext';
import Plots from '../components/Plot';

const Chart = () => {

      const [context, setContext] = useState({
        x:[],
        y:[]
        });

  return (
    
    <div style={{textAlign:"center"}}>
        <ChartContext.Provider value={[context,setContext]}>
        <Plots/>
        <CustomTable rows={rows}/>
        </ChartContext.Provider>
    </div>
  )
}

export default Chart