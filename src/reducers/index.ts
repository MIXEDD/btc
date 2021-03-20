import { combineReducers } from 'redux';
import { reducer as form, FormStateMap } from 'redux-form';

export interface RootState {
    form: FormStateMap;
}

const combinedReducers = () => combineReducers<RootState>({
    form,
});

export default combinedReducers;

