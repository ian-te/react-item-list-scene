import React from 'react';
import { shallow } from 'enzyme';
import ItemList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<ItemList />);
});
