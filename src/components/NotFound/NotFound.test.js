import React from 'react';
import ReactDOM from 'react-dom';
import Notfound from './Notfound';

it('Notfound renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notfound />, div);
  ReactDOM.unmountComponentAtNode(div);
});
