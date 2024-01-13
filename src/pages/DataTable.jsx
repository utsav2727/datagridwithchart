import React from 'react'
import rows from '../data/samplen.json'
import CustomTable from '../components/CustomTable'
import CustomTableWithLargeData from '../components/CustomTableWithLargeData'

const DataTable = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h2>Table with Large Data</h2>
        <CustomTableWithLargeData rows={rows}/>
    </div>
  )
}

export default DataTable