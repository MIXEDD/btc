import React from 'react';
import classnames from 'classnames';

import styles from './form-column.module.scss';

interface Props {
    withGutter?: boolean;
}

const FormColumn: React.FC<Props> = (props) => {
    const {withGutter = true} = props;

    const className = classnames(
        styles.formColumn,
        withGutter && styles.withGutter
    );

    return (
        <div className={className}>
            {React.Children.map(props.children, (child: any) => (
                {child}
            ))}
        </div>
    );
}

export default FormColumn;
