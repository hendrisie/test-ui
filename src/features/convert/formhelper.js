const required = (value) => (value ? undefined : 'This field is required');

const regex = /^(Rp)?(\s+)?(\d{1,3}(\.\d{3})*|(\d+))(\,\d{0,2})?$/;
const validCurrency = (value) => ((regex.test(value)) ? undefined : 'Please input correct format');

export const validate = {
  required,
  validCurrency,
};

const currencyParser = (value = '') => {
  const regex = new RegExp('[^-\\d,-]', 'g'), decimalString = new RegExp('\\,', 'g');
  let v = value ? value.replace(/\((.*)\)/, '-$1') // allow negative e.g. (1.99)
      .replace(regex, '') // replace any non numeric values
      .replace(decimalString, '.') : null; // convert any decimal values
  v = v || 0;
  return parseFloat(v);
};

export const parser = {
  currencyParser,
};
