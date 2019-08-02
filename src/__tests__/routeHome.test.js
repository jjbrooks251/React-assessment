import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

import RouterHome from '../components/RouterHome.js';

it('renders a login form', () => {
    const wrapper = renderer.create(<RouterHome />).toTree();

    expect(wrapper).toMatchSnapshot();
})