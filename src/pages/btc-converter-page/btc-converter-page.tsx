import React from 'react';
import { useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';

import BtcConverterForm, { FORM_NAME } from './forms/btc-converter-form';
import { btcConvertService } from '../../api-service/btc-convert-service';
import {BtcConverterFormModel, CoindeskBtcModel } from '../../types/BtcConverter';
import CurrenciesView from './views/currencies-view';
import Container from "../../components/layout/container";

import styles from './btc-converter-page.module.scss';

const SECOND_IN_MS = 60000;

const BtcConverterPage: React.FC = () => {
    const [data, setData] = React.useState<CoindeskBtcModel[]>([]);
    const [visibility, setVisibility] = React.useState<Record<string, boolean>>({});
        
    const formValues = useSelector(getFormValues(FORM_NAME)) as BtcConverterFormModel;
    
    const onChangeVisibility = (code: string, flag: boolean) => {
        const cryptoVisibility = {
            ...visibility
        };

        cryptoVisibility[code] = flag;

        setVisibility(cryptoVisibility);
    };
    
    const fetchBtcValues = (initialFetch = true) => {
        btcConvertService.fetchBtcValues().then((res) => {
            const coindesk: CoindeskBtcModel[] = [];
            const cryptoVisibility: Record<string, boolean> = {};
            
            Object.keys(res.data.bpi).forEach((key) => {
                 if (initialFetch) {
                     cryptoVisibility[res.data.bpi[key].code] = true;
                 }

                 coindesk.push(res.data.bpi[key]);
            });

            if (initialFetch) {
                setVisibility(cryptoVisibility);
            }

            setData(coindesk);
        });
    };

    React.useEffect(() => {
        fetchBtcValues();

        setInterval(() => {
            fetchBtcValues(false);
        }, SECOND_IN_MS);
    }, []);
    
   return (
       <Container>
           <div className={styles.formContainer}>
               <BtcConverterForm data={data} onChangeVisibility={onChangeVisibility} formValues={formValues} visibility={visibility} />
               {formValues?.BTC_AMOUNT && data.map((currency) => (
                   <CurrenciesView
                       key={currency.code}
                       description={currency.description}
                       rate={currency.rate}
                       symbol={currency.symbol}
                       btcAmount={formValues.BTC_AMOUNT}
                       code={currency.code}
                       onChangeVisibility={onChangeVisibility}
                       isVisible={visibility[currency.code]}
                   />
               ))}
           </div>
       </Container>
   );
};

export default BtcConverterPage;
