import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import store from '../imports/ui/store.js';

import App from '../imports/ui/components/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('app'));
});
