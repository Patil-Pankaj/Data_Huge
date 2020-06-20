import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import TableData from './pages/home';
import TimeSeries from './pages/time-series'
import 'antd/dist/antd.css';
class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
       
          <Route path="/" exact component={TableData} />
          <Route path="/view-detail/:id" exact component={TimeSeries} />
         
        </Switch>
      </Router>
    );
  } 
}
export default App;
