import React from 'react';
import { Form as ReduxForm } from 'redux-form';

interface Props {
    onSubmit: any;
}

const Form: React.FC<Props> = React.memo((props) => (
    <ReduxForm onSubmit={props.onSubmit}>
        {props.children}
    </ReduxForm>   
));

export default Form;
