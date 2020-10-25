import { put } from 'redux-saga/effects';
import ACTION from '../actions';
import * as restController from '../api/rest/restContraller';
import {put} from 'redux-saga/effects';

export function* getTransactions() {
    try{
        const {data} = yield restController.getUserTransaction();
        yield put({
            type: ACTION.GET_TRANSACTIONS_SUCCESS,
            data,
        })
    } catch(error){
        yield put({
                type: ACTION.GET_TRANSACTIONS_ERROR,
                error: error.response,
        })
    }
}