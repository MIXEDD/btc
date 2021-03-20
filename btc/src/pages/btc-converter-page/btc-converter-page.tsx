import React from 'react';

import BtcConverterForm from './forms/btc-converter-form';
import {btcConvertService} from '../../api-service/btc-convert-service';
import { CoindeskBtcModel } from '../../types/BtcConverter';

import styles from './btc-converter-page.module.scss';

const BtcConverterPage: React.FC = () => {
    const [data, setData] = React.useState<CoindeskBtcModel[]>();
    
    React.useEffect(() => {
        btcConvertService.fetchBtcValues().then((res) =>
            setData(Object.keys(res.data.bpi).map((bpi) => res.data.bpi[bpi]) as CoindeskBtcModel[] )
        );
    }, []);
    
   
   return (
       <div className={styles.container}>
          <BtcConverterForm />
       </div>      
   );
};

export default BtcConverterPage;
