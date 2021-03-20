import axios, { AxiosPromise } from 'axios';

import { API_PACKAGES } from './const';

export const btcConvertService = {
    fetchBtcValues: (): AxiosPromise<any> =>
        axios.get(`${API_PACKAGES.COINDESK}/v1/bpi/currentprice.json`),
};
