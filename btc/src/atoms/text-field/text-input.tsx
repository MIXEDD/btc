import React from 'react';

export const TextInput: React.FC = React.memo((props) => {
    const onClickClear = () => {
        // @ts-ignore
        props.onChange('');
    };

    return (
        <input

        />
    );
});
