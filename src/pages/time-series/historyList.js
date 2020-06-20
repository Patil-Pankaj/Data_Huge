import React from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'antd';

const columns = [
    // { title: 'Time Series (Daily)', dataIndex: 'Time Series (Daily)' },
    // { title: 'Name', dataIndex: 'timeSeriesDaily' },
    { title: 'Open', dataIndex: '1. open'  },
    { title: 'High', dataIndex: '2. high'},
    { title: 'Low', dataIndex: '3. low' },
   { title: 'Close', dataIndex: '4. close' },
    { title: 'Adjusted close', dataIndex: '5. adjusted close' },
    { title: 'Volume', dataIndex: '6. volume' },
    { title: 'Dividend amount', dataIndex: '7. dividend amount' },
     { title: 'Split coefficient', dataIndex: '8. split coefficient' },
     
  ];
   
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
const HistoryList = ({data}) =>{ 
    return(
      <div>
        <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
      </div>
    )
}
export default HistoryList