import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/components/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
