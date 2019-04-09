import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';


describe('<Dashboard />', () => {

  it('renders successfully', () => {
    render(<Dashboard />);
  });

});