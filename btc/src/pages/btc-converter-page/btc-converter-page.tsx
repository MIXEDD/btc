import React from 'react';

import BtcConverterForm from './forms/btc-converter-form';

import styles from './btc-converter-page.module.scss';

const BtcConverterPage: React.FC = () => {
   
   return (
       <div className={styles.container}>
          <BtcConverterForm />
       </div>      
   );
};

export default BtcConverterPage;
