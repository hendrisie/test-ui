import { reduxForm } from 'redux-form';
import component from '../components/ConvertForm';
import { submitTotal } from '../actions';

const submitForm = (values, dispatch) => {
  return dispatch(submitTotal(values.total));
};

// const validate = values => {
//   const errors = {};
//   const requiredFields = ['total'];
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required';
//     }
//   });
//   const parsedFields = ['total'];
//   const regex = /^(Rp)?(\s+)?(\d{1,3}(\.\d{3})*|(\d+))(\,\d{0,2})?$/;
//   parsedFields.forEach( field => {
//     if (!regex.test(values[field])) {
//       errors[field] = 'Wrong Format';
//     }
//   });
//   return errors;
// };

const ConvertForm = reduxForm({
  form: 'ConvertForm', // a unique identifier for this form
  onSubmit: submitForm
})(component);

export default ConvertForm;
