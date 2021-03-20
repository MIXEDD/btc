import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import Typography from '../../components/typography';

export enum FieldTypes {
    STRING = 'string',
    NUMBER = 'number',
}

interface OwnProps {
    value: string;
    label: string;
    type?: FieldTypes;
}

type Props = WrappedFieldProps & OwnProps;

const TextInput: React.FC<Props> = React.memo((props) => {
    const {
        label,
        input,
        type = FieldTypes.STRING,
        ...inputProps
    } = props;
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        input.onChange(event.target.value);
    };
    
    return (
        <>
            <Typography>{label}</Typography>
            <input
                onChange={handleChange}
                type={type}
                {...inputProps}
            />
        </>
    );
});

export default TextInput;
