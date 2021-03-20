import React from 'react';

import BtcConverterForm from './forms/btc-converter-form';
import {btcConvertService} from '../../api-service/btc-convert-service';
import { CoindeskBtcModel } from '../../types/BtcConverter';

import styles from './btc-converter-page.module.scss';

const SECOND_IN_MS = 60000;

const BtcConverterPage: React.FC = () => {
    const [data, setData] = React.useState<CoindeskBtcModel[]>();

    const fetchBtcValues = React.useCallback(() => {
        btcConvertService.fetchBtcValues().then((res) =>
            setData(Object.keys(res.data.bpi).map((bpi) => res.data.bpi[bpi]) as CoindeskBtcModel[] )
        );
    }, []);

    React.useEffect(() => {
        fetchBtcValues();

        setInterval(() => {
            fetchBtcValues();
        }, SECOND_IN_MS);
    }, []);
    
   return (
       <div className={styles.container}>
          <BtcConverterForm />
       </div>      
   );
};

export default BtcConverterPage;
