import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import App from './App';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('Adds a strike', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Strike'));
    getByText(/strikes: 1/i);
  });

  it('Adds 3x strikes', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Strike'));
    fireEvent.click(getByText('Strike'));
    fireEvent.click(getByText('Strike'));
    getByText(/strikes: 0/i);
  });

  it('Adds a ball', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Ball'));
    getByText(/balls: 1/i);
  });

  it('Adds 4x balls', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));
    fireEvent.click(getByText('Ball'));
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });

  it('Bunch of foul balls', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    fireEvent.click(getByText('Foul'));
    getByText(/strikes: 2/i);
  });

  it('Hit', () => {
    const { getByText, debug } = render(<App />);
    fireEvent.click(getByText('Hit'));
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });


});