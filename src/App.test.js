import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders app', () => {
  shallow(<App />);
});
