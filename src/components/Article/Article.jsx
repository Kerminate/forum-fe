import React, { Component } from 'react'
import { Card } from 'antd'

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
      </Card>
    )
  }
}

export default Article
