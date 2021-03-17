import React from 'react';
import classnames from 'classnames';

import styles from './typography.module.scss';

export enum Sizes {
    SMALL = 'small',
    DEFAULT = 'default',
    BIG = 'big',
    HEADER = 'header',
}

export enum Weights {
    NORMAL = 'normal-weight',
    BOLD = 'bold',
}

export enum ElementType {
    DIV = 'div',
    P = 'p',
    SPAN = 'span',
}

interface Props {
    size?: Sizes;
    weight?: Weights;
    elementType?: ElementType;
}

const Typography: React.FC<Props> = React.memo((props) => {
    const { 
        elementType = ElementType.P,
        size = Sizes.DEFAULT,
        weight = Weights.NORMAL,
        children,
        ...rest
    } = props;
    
    const computedClassName = classnames(
        styles.typography,
        styles[size],
        styles[weight],
    );

    return React.createElement(
        elementType,
        {
            className: computedClassName,
            ...rest,
        },
        children,
    );
});

export default Typography;
