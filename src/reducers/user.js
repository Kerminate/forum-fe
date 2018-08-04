import * as types from '../types'

const initState = {
  userList: [],
  user: {}
}

export function user (state = initState, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return { ...state, ...action.payload }
    case types.GET_USER_LIST:
      return { ...state, userList: action.payload.list }
    default:
      return state
  }
}
