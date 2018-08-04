import * as types from '../types'

const initState = {
  topicList: []
}

export function topic (state = initState, action) {
  switch (action.type) {
    case types.GET_TOPIC_LIST:
      return { ...state, topicList: action.payload.list }
    default:
      return state
  }
}
