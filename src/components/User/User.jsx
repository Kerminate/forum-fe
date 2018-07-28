import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'

const userData = [
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

class User extends Component {
  render () {
    return (
      <div className='user'>
        <Card title='会员积分榜' type='inner'>
          <List
            dataSource={userData}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon='idcard' />}
                  title={item.name}
                />
                <div>{item.point}</div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default User
