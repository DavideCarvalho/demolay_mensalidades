import { LoginTypes } from '../actions/login';
import { createReducer } from 'reduxsauce';
import update from 'immutability-helper';

const INITIAL_STATE = {
  authentication: null,
  person: {
    cid: '',
    name: '',
    isAdmin: false
  }
}

const doLogin = (state = INITIAL_STATE, {type, payload}) => {
  console.log(payload.login.person);
  return update(state, {
    authentication: {$set: payload.login.authentication},
    person: {$set: payload.login.person}
  });
}

const HANDLERS = {
  [LoginTypes.DO_LOGIN]: doLogin
}

export default createReducer(INITIAL_STATE, HANDLERS);