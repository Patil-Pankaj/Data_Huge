import React, { Component } from 'react';
import './style.css'
import Wrapper from '../wrapper';
import { getDataBySymbol } from "../../actions/getTableData";
import HistoryList from './indexList'
import { Input } from 'antd';
const { Search } = Input;


class TableData extends Component {
    state = {
        detailData: {},
        getHistoryDetails: []
    };
    constructor() {

        super();

        this.handleSearchKeyUp = this.keyUpHandler.bind(this, 'SearchInput');
       
    }
    keyUpHandler(refName,e)
    {  
        const searchSymbol = e.target.value;
        console.log(searchSymbol)
        getDataBySymbol(searchSymbol).then(data => {

            if (data != null) {
                const getHistoryDetails = data.bestMatches
              
                this.setState({ getHistoryDetails })
                console.log(getHistoryDetails)

            }


        });
    }
    async componentDidMount() {
       let id = "IBM"
        getDataBySymbol(id).then(data => {

            if (data != null) {
                const getHistoryDetails = data.bestMatches
              
                this.setState({ getHistoryDetails })
                console.log(getHistoryDetails)

            }


        });


    }


    render() {
        return (
            <Wrapper>
            <div class="row">
                <div class="col-md-4" >
                 <Search placeholder="search for symbol" onKeyUp={this.handleSearchKeyUp}  ref="SearchInput" enterButton />
                 <br/> <br/>
                 </div>

            </div>

            <div className="row">
             
                <div class="">
                <HistoryList data={this.state.getHistoryDetails} />
                </div>
            </div>





        </Wrapper>




        )
    }
}
export default TableData;