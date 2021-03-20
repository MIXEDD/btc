import React from 'react';
import classnames from 'classnames';

import styles from './spacer.module.scss';

export enum ElementType {
    DIV = 'div',
    P = 'p',
    SPAN = 'span',
}

export enum Sizes {
    X1 = '1',
}

interface Props {
    onClick?: any;
    elementType?: ElementType;
    m?: Sizes;
    ml?: Sizes;
    mr?: Sizes;
    mt?: Sizes;
    mb?: Sizes;
    p?: Sizes;
    pl?: Sizes;
    pr?: Sizes;
    pt?: Sizes;
    pb?: Sizes;
}

const Spacer: React.FC<Props> = (props) => {
    const {
        onClick,
        elementType = ElementType.DIV,
        children,
        m,
        mt,
        mb,
        ml,
        mr,
        p,
        pt,
        pb,
        pl,
        pr,
    } = props;

    const computedClassName = classnames(
        styles.spacer,
        m && styles[`m${m}`],
        mt && styles[`mt${mt}`],
        mb && styles[`mb${mb}`],
        ml && styles[`ml${ml}`],
        mr && styles[`mr${mr}`],
        p && styles[`p${p}`],
        pt && styles[`pt${pt}`],
        pb && styles[`pb${pb}`],
        pl && styles[`pl${pl}`],
        pr && styles[`pr${pr}`],
    );

    return React.createElement(
        elementType,
        {
            onClick,
            className: computedClassName,
        },
        children,
    );
};

export default Spacer;
