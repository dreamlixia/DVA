import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import Index from './Index/index'

const {
  Header, Content, Footer, Sider,
} = Layout;

const menus = [
  'nav1',
  'nav2',
  'nav3',
  'nav4',
  'nav5',
  'nav6'
]
const URL = [
  '/products',
  '/valueof',
  '/uploads'
  // {url: '/products'},
  // {url: '/valueof'},
  // {url: '/uploads'}
]

const style = {
    'height': '32px',
    'background': 'rgba(255,255,255,.2)',
    'margin': '16px'
}

function IndexPage() {
  console.log(menus)
  console.log(URL[1])
  // 左侧菜单
  // {
  //   menus.map((item, index) => {
  //     return  <Menu.Item key={index}>
  //         {/* <Link to={URL[index]}> */}
  //           <Icon type="user" />
  //           <span className="nav-text">{item}</span>
  //         {/* </Link> */}
  //       </Menu.Item>
  //   })
  // }
  return (
    <Layout>
    <Sider style={{
      overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
    }}
    >
      <div style={style} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['999']}>
        <Menu.Item key="999">
        <Link to='/'>
          <Icon type="user" />
          <span className="nav-text">biaoti</span>
        </Link>
        </Menu.Item>
        
        <Menu.Item key="1">
        <Link to='/valueof'>
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="team" />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="shop" />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <Index />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>

          

  )
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);