import React from 'react';
import { mount } from 'enzyme';
import Routes from '../routes';

describe('app', () => {
  it('renders without crashing', () => {
    mount(<Routes />);
  });
});
