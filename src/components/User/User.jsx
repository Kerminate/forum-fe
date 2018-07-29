import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'
import { connect } from 'react-redux'
import { getUserList } from '../../actions/user'
import './User.less'

const userData1 = [
  {
    name: 'kpl',
    point: 100
  },
  {
    name: 'sdgf',
    point: 10
  },
  {
    name: 'uef',
    point: 134
  },
  {
    name: 'sdg',
    point: 24
  }
]

@connect(
  state => state.user,
  { getUserList }
)
class User extends Component {
  componentDidMount () {
    this.props.getUserList('genius')
  }
  render () {
    return (
      <div className='user'>
        <Card title='会员积分榜' type='inner'>
          <List
            // dataSource={this.props.list}
            dataSource={userData1}
            renderItem={item => (
              <List.Item>
                <div className='user-item'>
                  <div className='item-left'>
                    <Avatar icon='idcard' />
                    <div>{item.point}</div>
                  </div>
                  <div className='item-right'>{item.point}</div>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default User
