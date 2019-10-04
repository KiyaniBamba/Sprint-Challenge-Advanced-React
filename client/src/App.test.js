import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';

import PlayersData from './playersData.js';

let tools;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App/>);
});



describe('the navbar componen is correctly load', () => { 
  it('Loads a navbar with the word cup', () => {
      expect(tools.queryByText(/Cup/)).toBeInTheDocument();
    });
  });
