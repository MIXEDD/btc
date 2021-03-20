import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Form, FormColumn } from './../../../components/form-layout';
import { PAGE_NAME } from '../constants';

export const FORM_NAME = `${PAGE_NAME}_FORM`;

type Props = InjectedFormProps<Partial<any>>;

const BtcConverterForm: React.FC = React.memo((props) => {

    return (
        <Form>
            <FormColumn>fghj</FormColumn>
        </Form>
    );
});


const formEnhance = reduxForm<Partial<any>, Props>({
    form: FORM_NAME,
    destroyOnUnmount: true,
    enableReinitialize: true,
});

export default formEnhance(BtcConverterForm);