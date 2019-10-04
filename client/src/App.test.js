import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('the navbar componen is correctly load', () => { 
  it('Loads a navbar with the word woman', () => {
      expect(tools.queryByText(/Women/)).toBeInTheDocument();
    });
  });

// describe('the api endpoint is functioning and returns the list of 200 players', () => {
//   it('Loads 200 users data', async () => {
//     const input = await axios ('http://localhost:5000/api/players');
//     const actualOutput = {
//       "status" : 200
//     }
//     expect(input).toMatchObject(actualOutput);
//   });
// });

