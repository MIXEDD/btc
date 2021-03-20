import React from 'react';
import classnames from 'classnames';

import styles from './form-column.module.scss';
import { FormRow } from '.';

interface Props {
    withGutter?: boolean;
}

const FormColumn: React.FC<Props> = (props) => {
    const {withGutter = true, children} = props;

    const className = classnames(
        styles.formColumn,
        withGutter && styles.withGutter
    );

    return (
        <div className={className}>
            {React.Children.map(children, (child: any) => (
                <FormRow>{child}</FormRow>
            ))}
        </div>
    );
}

export default FormColumn;
