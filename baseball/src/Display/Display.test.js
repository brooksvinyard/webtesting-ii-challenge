import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import Display from './Display';

describe('<Display />', () => {

  it('renders successfully', () => {
    render(<Display />);
  });
    
  it('renders Balls', () => {
    const { getByText } = render(<Display />);

    getByText(/balls/i);
  });

  it('renders Ball Props', () => {
    const { getByText } = render(<Display balls={1} />);

    getByText(/balls: 1/i);
  });

  it('renders Strikes', () => {
    const { getByText } = render(<Display />);

    getByText(/strikes/i);
  });

  it('renders Strike Props', () => {
    const { getByText } = render(<Display strikes={1} />);

    getByText(/strikes: 1/i);
  });

  it('renders Balls and Strikes Props', () => {
    const { getByText } = render(<Display balls={1} strikes={1} />);

    getByText(/balls: 1/i);
    getByText(/strikes: 1/i);
  });


});