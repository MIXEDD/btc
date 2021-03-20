import axios, { AxiosPromise } from 'axios';

import { API_PACKAGES } from './constants';
import {CoindeskBtcModel} from '../types/BtcConverter';

export const btcConvertService = {
    fetchBtcValues: (): AxiosPromise<{bpi: Record<string, CoindeskBtcModel>}> =>
        axios.get(`${API_PACKAGES.COINDESK}/v1/bpi/currentprice.json`),
};
