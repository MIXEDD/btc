import { combineReducers } from 'redux';
import { reducer as form, FormStateMap } from 'redux-form';

export interface RootState {
    form: FormStateMap;
}

export default () =>
    combineReducers<RootState>({
        form,
    });
