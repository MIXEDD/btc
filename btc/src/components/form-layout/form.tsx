import React from 'react';
import { Form as ReduxForm } from 'redux-form';

const Form: React.FC = (props) => (
    <ReduxForm>
        {props.children}
    </ReduxForm>   
)

export default Form;
