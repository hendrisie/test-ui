/*
@startuml

!include ../../../components/FormTextField.jsx

ConvertForm o-- reduxForm.Field
reduxForm.Field o-- FormTextField

class ConvertForm << (C,red) Component>>{
  handleSubmit()
}

@enduml

 */
import React from 'react';
import { Field } from 'redux-form';
import FormTextField from '../../../components/FormTextField';
import {
  validate,
  // parser,
} from '../formhelper';

const ConvertForm = props => {
  const { handleSubmit, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          classes={classes}
          name="total"
          component={FormTextField}
          label="Currency Value"
          placeholder="Please input value"
          validate={[validate.required, validate.validCurrency]}
          // parse={parser.currencyParser}
        />
      </div>
    </form>
  );
};

export default ConvertForm;
