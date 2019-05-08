import { validate, parser } from './formhelper';
describe('formhelper', () => {
  it('should validate required', () => {
    const requiredErrorMessage = 'This field is required';
    expect(validate.required('')).toMatch(requiredErrorMessage);
    expect(validate.required('test')).toBeUndefined();
  });

  it('should validate currency', () => {
    const formatErrorMessage = 'Please input correct format';
    expect(validate.validCurrency('18.215')).toBeUndefined();
    expect(validate.validCurrency('Rp17500')).toBeUndefined();
    expect(validate.validCurrency('Rp17.500,00')).toBeUndefined();
    expect(validate.validCurrency('Rp 120.325')).toBeUndefined();
    expect(validate.validCurrency('005.000')).toBeUndefined();
    expect(validate.validCurrency('001000')).toBeUndefined();

    expect(validate.validCurrency('17,500')).toMatch(formatErrorMessage);
    expect(validate.validCurrency('2 500')).toMatch(formatErrorMessage);
    expect(validate.validCurrency('3000 Rp')).toMatch(formatErrorMessage);
    expect(validate.validCurrency('Rp')).toMatch(formatErrorMessage);
  });

  it('should parse currency', () => {
    expect(parser.currencyParser(undefined)).toEqual(0);
    expect(parser.currencyParser(null)).toEqual(0);
    expect(parser.currencyParser('18.215')).toEqual(18215);
    expect(parser.currencyParser('Rp17500')).toEqual(17500);
    expect(parser.currencyParser('Rp17.500,00')).toEqual(17500.00);
    expect(parser.currencyParser('Rp 120.325')).toEqual(120325);
    expect(parser.currencyParser('005.000')).toEqual(5000);
    expect(parser.currencyParser('001000')).toEqual(1000);
  });
});
