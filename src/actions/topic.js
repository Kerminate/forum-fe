import axios from 'axios'
import * as types from '../types'

function topicList (data) {
  return { type: types.GET_TOPIC_LIST, payload: data }
}

export function getTopicList () {
  return (dispatch, getState) => {
    axios.get('/topic/list')
      .then((res) => {
        if (res.status === 200) {
          dispatch(topicList(res.data))
        }
      })
  }
}
