import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Header from './Header';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'balance',
    headerName: 'balance',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'name',
    width: 110,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'age',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'eyeColor',
    headerName: 'eyeColor',
    width: 110,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 110,
    editable: true,
  }
];



export default function CustomTableWithLargeData({rows}) {

  // const [selectionModel, setSelectionModel] =  useState([1,2,3,4,5]);
  // const onRowsSelectionHandler = (ids) => {
  //   setSelectionModel(ids);
  //   const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
  //   console.log(selectedRowsData);
  // };

  return (
    <>
    <Box sx={{ height: 600, width: '70%', marginTop:"10px", marginX:"auto" }}>
      <DataGrid
        rowHeight={40}
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerCheckboxSelection: false, 
        }))}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableSelectionOnClick
        // onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        // rowSelectionModel={selectionModel}
      />
    </Box>
    </>
  );
}