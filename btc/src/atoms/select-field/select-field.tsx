import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import Typography from '../../components/typography';

import styles from './select-field.module.scss';

interface OwnProps {
    valueKey: string;
    labelKey: string;
    label: string;
    options: any[];
}

type Props = WrappedFieldProps & OwnProps;

const SelectInput: React.FC<Props> = React.memo((props) => {
    const {
        label,
        input,
        options,
        valueKey,
        labelKey,
    } = props;

    const handleChange = (event: React.BaseSyntheticEvent) => {
       input.onChange(event.target.value);
    };
    
    const selectOptions = React.useMemo(() => [
        {
            [labelKey]: '',
            [valueKey]: '',
        },
        ...options,
    ], [options, valueKey, labelKey]);

    return (
        <>
            <Typography>{label}</Typography>
            <select onChange={handleChange} className={styles.selectField}>
                {selectOptions.map((option) => (
                    <option value={option[valueKey]}>{option[labelKey]}</option>
                ))}
            </select>
        </>
    );
});

export default SelectInput;
