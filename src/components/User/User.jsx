import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, List, Avatar } from 'antd'
import { connect } from 'react-redux'
import { getUserList } from '../../actions/user'
import './User.less'

@connect(
  state => state.user,
  { getUserList }
)
class User extends Component {
  componentDidMount () {
    this.props.getUserList()
  }
  render () {
    return (
      <div className='user'>
        <Card title='会员积分榜' type='inner'>
          <List
            // dataSource={this.props.list}
            dataSource={this.props.userList}
            renderItem={item => (
              <List.Item>
                <div className='user-item'>
                  <div className='item-left'>
                    <Avatar icon='idcard' />
                    <div>{item.username}</div>
                  </div>
                  <div className='item-right'>{item.score}</div>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

User.propTypes = {
  getUserList: PropTypes.func,
  userList: PropTypes.array
}

export default User
