import React from 'react';

import Typography from '../../../components/typography';
import CloseIcon from '../../../assets/icons/cancel-music.svg'
import * as symbolUtils from '../../../utils/symbol-utils';
import * as numberUtils from '../../../utils/number-utils';

import styles from './currencies-view.module.scss';

interface Props {
    description: string;
    rate: string;
    symbol: string;
    btcAmount: string;
}

const CurrenciesView: React.FC<Props> = React.memo((props) => {
    const {description, rate, symbol, btcAmount} = props;
    
    return (
        <div className={styles.currenciesView}>
            <div>
                <Typography>
                    {description}
                </Typography>
                <Typography>
                    {`${symbolUtils.decodeSymbol(symbol)} ${numberUtils.formatNumber(String(numberUtils.multiplyNumber(rate, btcAmount)))}`}
                </Typography>
            </div>
            <img src={CloseIcon} alt="close" width="10" height="10" />
        </div>
    );
});

export default CurrenciesView;
