import React from 'react';

import styles from './container.module.scss';

const Container: React.FC = React.memo((props) => (
    <div className={styles.container}>{props.children}</div>
));

export default Container;
