import React from 'react'
import { Layout, Menu, Icon ,Dropdown } from 'antd';
import { withRouter,Link } from "react-router-dom";
import './style.css'

const { Content } = Layout;
class Wrapper extends React.Component {

 



render() {

  return (
    <Layout >
      <div class="top" >
      <div class="headRow">
             <div class="row" style={{ color: '#fff', marginRight: '10px', marginTop: '-52px', paddingRight: '32px', display: 'flex', justifyContent: "flex-end" }} >
             </div>
      
          </div>
      </div>
      <Layout style={{ padding: 0,background: '#FFFFFF' }}>
          
        <Content style={{ margin: '0 16px' }} class="main">
          <div class="main" >
          {this.props.children}
          </div>
      
        </Content>
        </Layout>
    </Layout>
  );
}
}


export default withRouter(Wrapper)