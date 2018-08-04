import axios from 'axios'
import * as types from '../types'

function authSuccess (data) {
  return { type: types.AUTH_SUCCESS, payload: data }
}

function userList (data) {
  return { type: types.GET_USER_LIST, payload: data }
}

function errorMsg (data) {
  return { type: types.ERROR_MSG, payload: data }
}

export function login ({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名密码必须输入!')
  }
  return dispatch => {
    axios.post('/login', { user, pwd })
      .then((res) => {
        if (res.status === 200) {
          dispatch(authSuccess(res.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function getUserList () {
  return (dispatch, getState) => {
    axios.get('/user/list')
      .then((res) => {
        if (res.status === 200) {
          dispatch(userList(res.data))
        }
      })
  }
}
