import React from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

export enum Type {
    BUTTON = 'button',
}

interface Props {
    type?: Type;
    onClick?: () => void;
    disabled?: boolean;
    text?: string;
}

const Button: React.FC<Props> = (props) => {
    const { disabled, type = Type.BUTTON, text, onClick, children } = props;

    const className = classnames(
        styles.button,
        disabled && styles.disabled,
    );

    return (
        <button
            disabled={disabled}
            type={type}
            className={className}
            onClick={onClick}
        >
            {text || children}
        </button>
    );
};

export default Button;
