import numeral from 'numeral';

const FORMAT_TYPES = {
    REGULAR: '0,0.0000',
}

export const formatNumber = (number: string, format = FORMAT_TYPES.REGULAR) => numeral(number).format(format);

export const multiplyNumber = (number: string, multiply: string) => numeral(number).multiply(multiply).value();
