import React from 'react';

import styles from './form-row.module.scss';

const FormRow: React.FC = (props) => <div className={styles.formRow}>{props.children}</div>;

export default FormRow;
