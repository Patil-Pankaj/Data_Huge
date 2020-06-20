import React from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'antd';

const columns = [
    { title: 'Symbol', dataIndex: '1. symbol',key: 'symbol',render: (symbol,) =>
    (<Link to={`/view-detail/${symbol}`}>    <a style={{color:'Blue'}}>{symbol}</a></Link>
    )},
    { title: 'Name', dataIndex: '2. name', key: 'name', sorter: (a, b) => {return a['2. name'].localeCompare(b['2. name'])},
    render: (text, record) => <span>{record['2. name']}</span> },
    { title: 'Type', dataIndex: '3. type', key: 'type', sorter: (a, b) => {return a['3. type'].localeCompare(b['3. type'])},
    render: (text, record) => <span>{record['3. type']}</span>,  },
    { title: 'Region', dataIndex: '4. region', key: 'region' },
    { title: 'Market open', dataIndex: '5. marketOpen', key: 'marketOpen' },
   { title: 'Market close', dataIndex: '6. marketClose', key: 'marketClose' },
    { title: 'Currency', dataIndex: '8. currency',key: 'currency' },
  ];
   
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
const HistoryList = ({data}) =>{ 
    return(
      <div style={{textAlign: 'center'}}>
        <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
      </div>
    )
}
export default HistoryList