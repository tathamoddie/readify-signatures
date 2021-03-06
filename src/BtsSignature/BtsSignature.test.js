import React from 'react';
import { shallow } from 'enzyme';

import BtsSignature from './BtsSignature';

it('Renders', () => {
  const props = {
    email: 'your.name@readify.net',
    mobile: '+61 111 222 333',
    phone: '+61 123 456 789',
    name: 'your name',
    qualifications: 'Jedi Master | PSM I',
    title: 'Job Title',
    twitter: '@test'
  };
  const tree = shallow(<BtsSignature {...props} />);
  expect(tree).toMatchSnapshot();
});
