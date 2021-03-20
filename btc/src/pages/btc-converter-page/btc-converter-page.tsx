import React from 'react';
import { useSelector } from 'react-redux';

import BtcConverterForm, { FORM_NAME } from './forms/btc-converter-form';
import { btcConvertService } from '../../api-service/btc-convert-service';
import {BtcConverterFormModel, CoindeskBtcModel } from '../../types/BtcConverter';
import CurrenciesView from './views/currencies-view';

import styles from './btc-converter-page.module.scss';
import { getFormValues } from 'redux-form';

const SECOND_IN_MS = 60000;

const BtcConverterPage: React.FC = () => {
    const [data, setData] = React.useState<CoindeskBtcModel[]>();
    
    const formValues = useSelector(getFormValues(FORM_NAME)) as BtcConverterFormModel;
    
    const fetchBtcValues = React.useCallback(() => 
        btcConvertService.fetchBtcValues().then((res) =>
            setData(Object.keys(res.data.bpi).map((bpi) => res.data.bpi[bpi]) as CoindeskBtcModel[] )),
    []);

    React.useEffect(() => {
        fetchBtcValues();

        setInterval(() => {
            fetchBtcValues();
        }, SECOND_IN_MS);
    }, []);
    
   return (
       <div className={styles.container}>
           <div className={styles.formContainer}>
               <BtcConverterForm />
               {formValues?.BTC_AMOUNT && data?.map((currency) => (
                   <CurrenciesView
                       key={currency.code}
                       description={currency.description}
                       rate={currency.rate}
                       symbol={currency.symbol}
                       btcAmount={formValues.BTC_AMOUNT}
                   />
               ))}
           </div>
       </div>      
   );
};

export default BtcConverterPage;
