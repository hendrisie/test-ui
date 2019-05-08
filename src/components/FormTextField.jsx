/*
@startuml

class FormTextField << (C,red) Component>>{
  label: string
  input: Input
  meta: Meta
  ...rest
}

@enduml

 */
import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default FormTextField;
