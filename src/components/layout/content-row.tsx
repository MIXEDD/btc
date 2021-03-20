import React from 'react';
import classnames from 'classnames';

import styles from './content-row.module.scss';

export enum Align {
    DEFAULT = 'end',
    END = 'end',
    START = 'start',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
}

interface Props {
    alignment?: Align;
    topGutter?: boolean;
}

const Content: React.FC<Props> = React.memo((props) => {
    const {alignment = Align.DEFAULT, topGutter = true, children} = props;

    return (
        <div
            className={classnames(
                styles.content,
                styles[alignment],
                topGutter && styles.topGutter,
            )}
        >
            {children}
        </div>
    );
});

export default Content;
