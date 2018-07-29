import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'
import './Article.less'

const tabListNoTitle = [{
  key: 'all',
  tab: '全部'
}, {
  key: 'original',
  tab: '原创'
}, {
  key: 'reprint',
  tab: '转载'
}, {
  key: 'ask',
  tab: '提问'
}, {
  key: 'station',
  tab: '站务'
}]

const contentListNoTitle = {
  all: <p>all content</p>,
  original: <p>original content</p>,
  reprint: <p>reprint content</p>,
  ask: <p>ask content</p>,
  station: <p>station content</p>
}

const postData = [
  {
    title: 'dsgsdg',
    content: 'addsgsd',
    author_id: 'kpl'
  }, {
    title: 'sgnd',
    content: 'asgsdg',
    author_id: '123'
  }, {
    title: 'sdg',
    content: 'sdg sdmg dsg',
    author_id: 'ki'
  }
]

class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      noTitleKey: 'all'
    }
  }

  onTabChange (key, type) {
    console.log(key, type)
    this.setState({ [type]: key })
  }

  render () {
    return (
      <Card
        style={{ width: '100%' }}
        type='inner'
        tabList={tabListNoTitle}
        activeTabKey={this.state.noTitleKey}
        onTabChange={(key) => { this.onTabChange(key, 'noTitleKey') }}
      >
        {contentListNoTitle[this.state.noTitleKey]}
        <List
          dataSource={postData}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon='user' />}
                title={item.title}
                description={item.content}
              />
              <div>{item.author_id}</div>
            </List.Item>
          )}
        />
      </Card>
    )
  }
}

export default Article
