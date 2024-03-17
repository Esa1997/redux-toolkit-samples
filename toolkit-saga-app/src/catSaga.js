import {call, put, takeEvery } from 'redux-saga/effects'
import { getCatsSuccess } from './catState';

function* workGetCatsFetch() {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formatedCats = yield cats.json();
    const slicedCats = formatedCats.slice(0,10);
    yield put(getCatsSuccess(slicedCats));

}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga;