import React, { Component } from 'react';
import './style.css'
import Wrapper from '../wrapper';
import { gettimeSeriesBySymbol } from "../../actions/getTableData";
import HistoryList from './historyList'
import { Link } from "react-router-dom";
import {  Icon } from 'antd';
class TimeSeries extends Component {
    state = {
        detailData: {},
        getHistoryDetails: [],
        MarketMovement:"",
        tableSymbol : [],
    };

    async componentDidMount() {
        const id = window.location.pathname.split('/').pop()
        const name = id
        const tableSymbol = name
        this.setState({ tableSymbol })
     
        gettimeSeriesBySymbol(id).then(data => {

            if (data != null) {
          
                const getHistoryDetails = [data['Time Series (Daily)']['2020-06-19']]
           
               
                this.setState({ getHistoryDetails })
                console.log(getHistoryDetails[0]['1. open'])
                var x = getHistoryDetails[0]['1. open'];
                var y = getHistoryDetails[0]['4. close'];
            
                const MarketMovement =    y - x;
             
                this.setState({MarketMovement})
             

            }


        });


    }


    render() {
        return (
            <Wrapper>
            <div class="row">
                <div class="col-md-8" >

                
                <h4 style={{ color: '#045597', padding: '16px' }}> <Link to={`/`}> <a style={{color:'Blue'}}><Icon type="rollback"  /></a></Link>     </h4>
                 </div>

            </div>

            <div className="row">
            <h4 style={{ padding:'-10px'}}>  Symbol :<span style={{color:'Blue'}}>{this.state.tableSymbol} </span> &nbsp;   </h4>
               
            <h4>Last Day Market Movement as percentage: <span style={{color:'Blue'}}> {this.state.MarketMovement} </span></h4>
                <div class="">
                <HistoryList data={this.state.getHistoryDetails} />
                </div>
            </div>





        </Wrapper>




        )
    }
}
export default TimeSeries;