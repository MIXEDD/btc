import React from 'react';
import {Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Form, FormColumn } from './../../../components/form-layout';
import { PAGE_NAME } from '../constants';
import TextInput, { FieldTypes } from '../../../atoms/text-field/text-input';
import Translations from '../../../translations/en.json';
import SelectInput from '../../../atoms/select-field/select-field';
import { BtcConverterFormModel, CoindeskBtcModel } from '../../../types/BtcConverter';

export const FORM_NAME = `${PAGE_NAME}_FORM`;

export const FIELD_NAMES = {
    BTC_AMOUNT: 'BTC_AMOUNT',
    CRYPTOS: 'CRYPTOS',
}

interface OwnProps {
    data: CoindeskBtcModel[];
    onChangeVisibility: (code: string, flag: boolean) => void;
}

type Props = InjectedFormProps<Partial<BtcConverterFormModel>, OwnProps> & OwnProps;

const BtcConverterForm: React.FC<Props> = React.memo((props) => {
    const { data, onChangeVisibility } = props;
    
    const onSelectChange = (value: any) => {
        onChangeVisibility(value, true);
    };
    
    return (
        <Form>
            <FormColumn>
                <Field 
                    name={FIELD_NAMES.BTC_AMOUNT}
                    label={Translations["labels.enterBtcAmount"]}
                    type={FieldTypes.NUMBER}
                    component={TextInput}
                />
                <Field
                    name={FIELD_NAMES.CRYPTOS}
                    label={Translations["labels.selectCurrencies"]}
                    component={SelectInput}
                    options={data}
                    labelKey="description"
                    valueKey="code"
                    onChange={onSelectChange}
                />
            </FormColumn>
        </Form>
    );
});


const formEnhance = reduxForm<Partial<BtcConverterFormModel>, OwnProps>({
    form: FORM_NAME,
    destroyOnUnmount: true,
    enableReinitialize: true,
});

export default formEnhance(BtcConverterForm);
