import React from 'react';

import Typography from '../../../components/typography';
import CloseIcon from '../../../assets/icons/cancel-music.svg'

import styles from './currencies-view.module.scss';

interface Props {
    description: string;
    rate: string;
}

const CurrenciesView: React.FC<Props> = React.memo((props) => {
    const {description, rate} = props;
    
    return (
        <div className={styles.currenciesView}>
            <div>
                <Typography>
                    {description}
                </Typography>
                <Typography>
                    {rate}
                </Typography>
            </div>
            <img src={CloseIcon} alt="close" width="10" height="10" />
        </div>
    );
});

export default CurrenciesView;
