import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';


export function* signIn({ payload }) {
  const { email, password } = payload;


  const response = yield call(api.post, 'sessions', { //passo qual método que quero chamar (api.post) e os parâmetros que o apipost precisa receber, ou seja, a url (sessions) e depois os dados q queremos enviar
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Úsuário não é prestador');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard');

}



export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn) //toda vez que o takelatest ouvir meu sign_in_request, vai chamar uma função (signIn)
]);