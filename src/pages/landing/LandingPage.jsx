import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Page from '../../components/Page';
import { ConvertForm, Result } from '../../features/convert'

const store = configureStore();

class LandingPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Page title={"Simple Denominator App"}>
          <ConvertForm />
          <Result />
        </Page>
      </Provider>
    );
  }
}

export default LandingPage;