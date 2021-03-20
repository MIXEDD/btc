import React from 'react';
import Typography from '../../components/typography';

interface Props {
    value: string;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = React.memo((props) => {
    const {
        label,
        ...inputProps
    } = props;
    
    return (
        <>
            <Typography>{label}</Typography>
            <input
                {...inputProps}
            />
        </>
    );
});

export default TextInput;
