import React from 'react';
import {Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Form, FormColumn } from './../../../components/form-layout';
import { PAGE_NAME } from '../constants';
import TextInput, { FieldTypes } from '../../../atoms/text-field/text-input';
import Translations from '../../../translations/en.json';

export const FORM_NAME = `${PAGE_NAME}_FORM`;

type Props = InjectedFormProps<Partial<any>>;

const BtcConverterForm: React.FC = React.memo((props) => {
    
    const onChange = (value: any) => {
        
    };  
    
    return (
        <Form>
            <FormColumn>
                <Field 
                    name="BTC_AMOUNT"
                    label={Translations["labels.enterBtcAmount"]}
                    type={FieldTypes.NUMBER}
                    component={TextInput}
                    onChange={onChange}
                />
            </FormColumn>
        </Form>
    );
});


const formEnhance = reduxForm<Partial<any>, any>({
    form: FORM_NAME,
    destroyOnUnmount: true,
    enableReinitialize: true,
});

export default formEnhance(BtcConverterForm);
