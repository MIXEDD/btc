import React from 'react';
import {Field, InjectedFormProps, reduxForm, submit} from 'redux-form';
import {useDispatch} from "react-redux";

import { Form, FormColumn } from './../../../components/form-layout';
import { PAGE_NAME } from '../constants';
import TextInput, { FieldTypes } from '../../../atoms/text-field/text-input';
import Translations from '../../../translations/en.json';
import SelectInput from '../../../atoms/select-field/select-field';
import { BtcConverterFormModel, CoindeskBtcModel } from '../../../types/BtcConverter';
import Button from '../../../atoms/button/button';
import Content from "../../../components/layout/content";

export const FORM_NAME = `${PAGE_NAME}_FORM`;

export const FIELD_NAMES = {
    BTC_AMOUNT: 'BTC_AMOUNT',
    CRYPTOS: 'CRYPTOS',
}

interface OwnProps {
    data: CoindeskBtcModel[];
    onChangeVisibility: (code: string, flag: boolean) => void;
    formValues: BtcConverterFormModel;
    visibility: Record<string, boolean>;
}

type Props = InjectedFormProps<Partial<BtcConverterFormModel>, OwnProps> & OwnProps;

const BtcConverterForm: React.FC<Props> = React.memo((props) => {
    const { data, onChangeVisibility, formValues, visibility } = props;

    const dispatch = useDispatch();

    const onSubmit = () => onChangeVisibility(formValues.CRYPTOS, true);

    const submitForm = () => dispatch(submit(FORM_NAME));

    return (
        <Form onSubmit={onSubmit}>
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
                />
            </FormColumn>
            <Content>
                <Button text={Translations["labels.addCurrency"]} disabled={!formValues?.CRYPTOS || visibility[formValues?.CRYPTOS]} onClick={submitForm}/>
            </Content>
        </Form>
    );
});


const formEnhance = reduxForm<Partial<BtcConverterFormModel>, OwnProps>({
    form: FORM_NAME,
    destroyOnUnmount: true,
    enableReinitialize: true,
});

export default formEnhance(BtcConverterForm);
