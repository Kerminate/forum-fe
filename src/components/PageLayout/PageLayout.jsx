import React, { Component } from 'react'
import { Layout, Menu, Input, Avatar } from 'antd'
import Home from '../../views/Home/Home'
import './PageLayout.less'

const { Header, Content, Footer } = Layout
const Search = Input.Search

class PageLayout extends Component {
  render () {
    return (
      <Layout className='pageLayout'>
        <Header className='header'>
          <div className='prefix'>
            <Avatar icon='user' className='avatar' />
            <Search
              placeholder='搜索'
              onSearch={value => console.log(value)}
              className='search'
            />
          </div>
          <Menu
            theme='dark'
            mode='horizontal'
            className='menu'
          >
            <Menu.Item key='1'>首页</Menu.Item>
            <Menu.Item key='2'>注册</Menu.Item>
            <Menu.Item key='3'>登录</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Home />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default PageLayout
