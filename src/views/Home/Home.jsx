import React, { Component } from 'react'
import Article from '../../components/Article/Article'
import User from '../../components/User/User'
import './Home.less'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='home-article'>
          <Article />
        </div>
        <div className='home-user'>
          <User className='home-user' />
        </div>
      </div>
    )
  }
}

export default Home
