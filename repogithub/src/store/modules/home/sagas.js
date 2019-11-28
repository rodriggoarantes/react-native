import { Alert } from 'react-native';
import { put, all, takeLatest } from 'redux-saga/effects';

import { updateAmountSuccess } from './actions';

function* counter({ count }) {
  Alert.alert('Atualizando quantidade');
  const plus = count + 1;
  yield put(updateAmountSuccess(plus));
}

export default all([takeLatest('@home/PLUS', counter)]);
